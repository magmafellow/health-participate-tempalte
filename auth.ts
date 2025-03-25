import NextAuth from "next-auth"
import Credentials from 'next-auth/providers/credentials'

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async(credentials) => {
        let user = null

        const password = credentials.password

        user = await getUserFromDb(credentials.email, password)

        if (!user) {
          throw new Error('Invalid credentials.')
        }

        return user
      }
    })
  ],
})
