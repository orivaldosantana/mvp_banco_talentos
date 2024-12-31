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
      //Only authenticated users can access the admin pages
      if (isOnAdminPage && user?.profile !== 'ADMIN') {
        return false
      }

      //Only unauthenticated users can access the login page
      if (isOnLoginPage && user) {
        return Response.redirect(
          new URL('/admin/collaborator', request.nextUrl)
        )
      }

      return true
    }
  }
}
