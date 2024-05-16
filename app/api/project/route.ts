export const POST = async (req: Request) => {
  const requestData = await req.json()
  console.log(requestData)
  return Response.json({
    message: 'Teste de API realizado com sucesso!'
  })
}
