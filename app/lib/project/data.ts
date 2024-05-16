import { PrismaClient } from '@prisma/client'

export const getProjectData = async () => {
  const prisma = new PrismaClient()

  try {
    const projects = await prisma.project.findMany()
    return projects
  } catch (error) {
    console.error(error)
  } finally {
    await prisma.$disconnect()
  }
}
