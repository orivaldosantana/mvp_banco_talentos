'use server'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

export async function addUser(
  prevState: {
    message: string
  },
  formData: FormData
) {
  let name = formData.get('name')
  let email = formData.get('email')
  let cellphone = formData.get('cellphone')
  let password = formData.get('password')

  console.log(`addUser ${name} ${email} ${cellphone} ${password}`)

  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  console.log(hashedPassword)

  const prisma = new PrismaClient()

  try {
    await prisma.user.create({
      data: {
        name: name.toString(),
        email: email.toString(),
        cellPhone: cellphone.toString(),
        knowledge: 'none',
        password: hashedPassword,
        profile: 'COLLABORATOR'
      }
    })
    return { message: 'Cadastro realizado com sucesso!', type: 'success' }
  } catch (error) {
    console.error(error)
    return { message: 'Erro ao realizar o cadastro!', type: 'error' }
  } finally {
    await prisma.$disconnect()
  }
}

export async function addCollaborator(
  prevState: {
    message: string
  },
  formData: FormData
) {
  let name = formData.get('name')
  let email = formData.get('email')
  let cellphone = formData.get('cellphone')

  console.log(`addUser ${name} ${email} ${cellphone}`)

  const prisma = new PrismaClient()

  try {
    await prisma.user.create({
      data: {
        name: name.toString(),
        email: email.toString(),
        cellPhone: cellphone.toString(),
        knowledge: 'none',
        password: 'none',
        profile: 'COLLABORATOR'
      }
    })
    return { message: 'Cadastro realizado com sucesso!', type: 'success' }
  } catch (error) {
    console.error(error)
    return { message: 'Erro ao realizar o cadastro!', type: 'error' }
  } finally {
    await prisma.$disconnect()
  }
}

export async function getManyUser(
  prevState: {
    message: string
  },
  formData: FormData
) {
  let name = formData.get('name')
  const prisma = new PrismaClient()

  try {
    const users = await prisma.user.findMany({
      where: {
        name: {
          contains: name.toString()
        }
      }
    })

    return {
      message: 'Cadastro realizado com sucesso!',
      type: 'success',
      users: users
    }
  } catch (error) {
    console.error(error)
    return { message: 'Erro ao realizar o cadastro!', type: 'error' }
  } finally {
    await prisma.$disconnect()
  }
}
