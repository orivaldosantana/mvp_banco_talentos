'use server'
import { PrismaClient } from '@prisma/client'

export async function addProject(
  prevState: {
    message: string
  },
  formData: FormData
) {
  let title = formData.get('title')
  let description = formData.get('description')

  console.log(`addProject ${title} ${description}`)

  const prisma = new PrismaClient()

  try {
    //salva dados no banco de dados
    await prisma.project.create({
      data: {
        title: title.toString(),
        description: description.toString()
      }
    })
    console.log('Projeto cadastrado com sucesso!')
    return { message: 'Cadastro realizado com sucesso!', type: 'success' }
  } catch (error) {
    console.error(error)
    return { message: 'Erro ao realizar o cadastro!', type: 'error' }
  } finally {
    await prisma.$disconnect()
  }
}
