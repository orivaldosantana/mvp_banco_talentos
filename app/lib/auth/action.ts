import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

export const login = async (formData: FormData) => {
  let email = formData.get('email')
  let password = formData.get('password')

  const prisma = new PrismaClient()

  let objReturn = {}

  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  try {
    let user = await prisma.user.findFirst({
      where: {
        email: email.toString(),
        password: hashedPassword.toString()
      }
    })

    if (user) {
      objReturn = {
        message: 'Usuário autenticado com sucesso!',
        type: 'success'
      }
    } else {
      objReturn = { message: 'Usuário ou senha inválidos!', type: 'error' }
    }
  } catch (error) {
    console.error(error)
    objReturn = { message: 'Erro ao realizar o login!', type: 'error' }
  } finally {
    await prisma.$disconnect()
  }
  return objReturn
}
