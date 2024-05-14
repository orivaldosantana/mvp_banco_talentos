export const addUser = async (formData: FormData) => {
  'use server'

  let name = formData.get('name')
  let email = formData.get('email')
  let cellphone = formData.get('cellphone')

  console.log(`addUser ${name} ${email} ${cellphone}`)
  /*
  export async function getServerSideProps(context) {
  const prisma = new PrismaClient()
  let user

  try {
    await prisma.user.create({
      data: {
        name: name, 
        email: email,
        cellphone: cellphone,
        knowledge: 'none',
        profile: 'none', 
      },
    })
  } catch (error) {
    console.error(error)
  } finally {
    await prisma.$disconnect()
  }
  */
}
