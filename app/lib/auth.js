import NextAuth from 'next-auth'
import GitHub from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'
import { authConfig } from './auth.config'

const loginCredential = async (credentials) => {
  /*
  Buscar o usuário no banco de dados, se não encontrar, lançe um erro, compare 
  a senha informada com a senha do banco criptografada, lançe um erro se forem 
  diferentes, se ocorrer algum erro, lançe. Ao final, retorne o usuário.
  */
  console.log('credentials login: ', credentials)
  const prisma = new PrismaClient()
  let user = null
  try {
    user = await prisma.user.findFirst({
      where: {
        email: credentials.email
      }
    })
    await prisma.$disconnect()

    if (!user) {
      throw new Error('Credenciais inválidas.')
    }
    const match = await bcrypt.compare(credentials.password, user.password)
    console.log('Match: ', match)
    if (!match) {
      user = null
      throw new Error('Credenciais inválidas..')
    }
    //console.log('User login: ', user)
  } catch (error) {
    //console.error(error)
    throw new Error('Falha ao realizar o login.')
  } finally {
    console.log('Finally!!!!')
    await prisma.$disconnect()
    return user
  }
}

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut
} = NextAuth({
  ...authConfig,
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
    CredentialsProvider({
      authorize: async (credentials) => {
        /*
         A lógica aqui é simples, se encontrar o usuário do banco de dados e 
         se a senha estiver correta, retorna este usuário, se ocorrer algum 
         erro, retorna nulo
        */
        try {
          const user = await loginCredential(credentials)
          //console.log('User info ', user)
          return user
        } catch (error) {
          console.error('Authorize error:\n\n\n', error)
          console.log('Error ao realizar o login!')
          return null
        }
      }
    })
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      //console.log('signIn', user, account, profile)
      if (account.provider === 'github') {
        console.log('github', user.name, user.email, user.image)
        const prisma = new PrismaClient()
        try {
          let userBD = await prisma.user.findFirst({
            where: {
              email: user.email.toString()
            }
          })
          console.log(userBD)
          if (userBD) {
            console.log('E-mail já cadastrado!')
          } else {
            await prisma.user.create({
              data: {
                name: user.name.toString(),
                email: user.email.toString(),
                knowledge: 'none',
                password: 'none',
                profile: 'COLLABORATOR'
              }
            })
            console.log('Cadastro realizado com sucesso!')
          }
        } catch (error) {
          console.error(error)
          console.log('Erro ao realizar o cadastro!')
        } finally {
          await prisma.$disconnect()
          return true
        }
      }
      return true
    },
    ...authConfig.callbacks
  }
})
