export const POST = async (req: Request) => {
  const requestData = await req.json()
  console.log(requestData)
  return Response.json({
    message: 'Cadastro realizado com sucesso!'
  })
  /*
  const { name, description, status, startDate, endDate, userId } = req.body
  const prisma = new PrismaClient()
  try {
    const project = await prisma.project.create({
      data: {
        name,
        description,
        status,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        user: { connect: { id: userId } }
      }
    })
    res.status(200).json(project)
  } catch (error) {
    res.status(500).json({ message: 'Erro ao realizar o cadastro!', type: 'error' })
  } finally {
    await prisma.$disconnect()
  }
  */
}
