import NextAuth from 'next-auth'
import { authConfig } from './app/lib/auth.config'

export default NextAuth(authConfig).auth

export const config = {
  matcher: ['/((?!api|static|.*\\..*|_next).*)']
}
