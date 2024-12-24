import { PrismaClient } from '@prisma/client'

export const login = async (formData: FormData) => {
  let email = formData.get('email')
  let password = formData.get('password')

  const prisma = new PrismaClient()

  try {
    let user = await prisma.user.findFirst({
      where: {
        email: email.toString(),
        password: password.toString()
      }
    })

    if (user) {
      return { message: 'Usuário autenticado com sucesso!', type: 'success' }
    } else {
      return { message: 'Usuário ou senha inválidos!', type: 'error' }
    }
  } catch (error) {
    console.error(error)
    return { message: 'Erro ao realizar o login!', type: 'error' }
  } finally {
    await prisma.$disconnect()
  }
}
