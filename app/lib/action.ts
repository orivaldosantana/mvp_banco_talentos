export const sayHello = async () => {
  'use server'

  console.log('Hello')
}

export const addTest = async (fromData: FormData) => {
  'use server'

  let name = fromData.get('name')
  console.log('addTest: ' + name)
}
