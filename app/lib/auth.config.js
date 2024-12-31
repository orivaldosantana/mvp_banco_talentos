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
      const isOnCollaboratorPage =
        request.nextUrl?.pathname.startsWith('/collaborator')

      //Only authenticated users with ADMIN profile can access the admin pages
      if (isOnAdminPage && user?.profile !== 'ADMIN') {
        return false
      }

      //Only authenticated users can access the collaborator pages
      if (!user && isOnCollaboratorPage) {
        console.log('On Collaborator Page and user is not authenticated')
        return false
      }

      //Only unauthenticated users can access the login page
      if (isOnLoginPage && user?.profile === 'ADMIN') {
        return Response.redirect(
          new URL('/admin/collaborator', request.nextUrl)
        )
      } else if (isOnLoginPage && user?.profile === 'COLLABORATOR') {
        return Response.redirect(new URL('/collaborator/data', request.nextUrl))
      }

      return true
    }
  }
}
