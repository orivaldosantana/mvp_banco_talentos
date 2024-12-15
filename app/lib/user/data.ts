import { PrismaClient } from '@prisma/client'

export const getAllUser = async () => {
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

export const getManyUser = async (name: string) => {
  const prisma = new PrismaClient()

  try {
    const users = await prisma.user.findMany({
      where: {
        name: {
          contains: name
        }
      }
    })
    return users
  } catch (error) {
    console.error(error)
  } finally {
    await prisma.$disconnect()
  }
}
