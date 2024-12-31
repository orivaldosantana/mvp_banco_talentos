export const authConfig = {
  pages: {
    signIn: '/login'
  },
  providers: [],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.profile = user.profile
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id
        session.user.profile = token.profile
      }
      return session
    },
    authorized({ auth, request }) {
      console.log(auth)

      const user = auth?.user
      const isOnLoginPage = request.nextUrl?.pathname.startsWith('/login')
      const isOnAdminPage = request.nextUrl?.pathname.startsWith('/admin')

      if (!user) {
        console.log('User is not authenticated')
      }
      //Only authenticated users can access the admin pages
      if (isOnAdminPage && user?.profile !== 'ADMIN') {
        return false
      }

      //Only unauthenticated users can access the login page
      if (isOnLoginPage && user?.profile === 'ADMIN') {
        return Response.redirect(
          new URL('/admin/collaborator', request.nextUrl)
        )
      }

      if (isOnLoginPage && user?.profile === 'COLLABORATOR') {
        return Response.redirect(new URL('/', request.nextUrl))
      }

      return true
    }
  }
}
