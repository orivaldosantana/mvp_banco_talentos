'use server'
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

export async function handleCredentialLogin(
  prevState: {
    message: string
  },
  formData: FormData
) {
  let email = formData.get('email')
  let password = formData.get('password')

  try {
    const user = await signIn('credentials', { email, password })
    console.log('login handleCredentialLogin', user)
    console.log(`login: ${email} ${password}`)
    return { message: 'Login realizado com sucesso!', type: 'success' }
  } catch (error) {
    //console.error(error)
    return { message: 'Erro ao realizar o login!', type: 'error' }
  }
}
