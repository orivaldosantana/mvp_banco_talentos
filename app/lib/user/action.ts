'use server'
import { PrismaClient } from '@prisma/client'

export async function addUser(
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
    return { message: 'User added!' }
  } catch (error) {
    console.error(error)
    return { message: 'Error adding user!' }
  } finally {
    await prisma.$disconnect()
  }
}
