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
