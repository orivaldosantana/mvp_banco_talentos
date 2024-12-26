import NextAuth from 'next-auth'
import GitHub from 'next-auth/providers/github'
import { PrismaClient } from '@prisma/client'

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut
} = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
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
        }
      }
      return true
    }
  }
})
