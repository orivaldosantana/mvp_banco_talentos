import { signIn, signOut } from '../lib/auth'

export const sayHello = async () => {
  'use server'

  console.log('Hello')
}

export const addTest = async (fromData: FormData) => {
  'use server'

  let name = fromData.get('name')
  console.log('addTest: ' + name)
}

export const handleGitHubLogin = async () => {
  'use server'
  await signIn('github')
}

export const handleGitHubLogout = async () => {
  'use server'
  await signOut()
}

export const handleCredentialLogin = async (formData: FormData) => {
  'use server'

  let email = formData.get('email')
  let password = formData.get('password')

  try {
    await signIn('credentials', { email, password })
    console.log(`login: ${email} ${password}`)
  } catch (error) {
    console.error(error)
    return { message: 'Erro ao realizar o login!', type: 'error' }
  }
}
