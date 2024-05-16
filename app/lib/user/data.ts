import { PrismaClient } from '@prisma/client'

export const getUserData = async () => {
  const prisma = new PrismaClient()

  try {
    const users = await prisma.user.findMany()
    return users
  } catch (error) {
    console.error(error)
  } finally {
    await prisma.$disconnect()
  }
}
