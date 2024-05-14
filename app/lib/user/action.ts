import { PrismaClient } from '@prisma/client'

export const addUser = async (formData: FormData) => {
  'use server'

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
    return true // success
  } catch (error) {
    console.error(error)
    throw new Error('Error adding user!')
  } finally {
    await prisma.$disconnect()
  }
}
