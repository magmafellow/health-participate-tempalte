import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { signInSchema } from './lib/zod'
import { ZodError } from 'zod'
import { getUserFromDb } from './lib/actions/user'

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        username: {},
        password: {},
      },
      authorize: async credentials => {
        try {
          let user = null
          const { username, password } = await signInSchema.parseAsync(
            credentials
          )

          user = await getUserFromDb(username, password)

          console.log('user: ', user)

          if (!user) {
            throw new Error('Invalid credentials.')
          }

          return user
        } catch (error) {
          console.log('error OCCURED, ', error)

          if (error instanceof ZodError) {
            return null
          }
          return null
        }
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      console.log('user in jwt', user)
      if (user) {
        // User is available during sign-in
        token.id = user.id
        token.username = user.username
      }
      return token
    },
    session({ session, token }) {
      session.user.id = token.id
      session.user.username = token.username
      return session
    },
  },
})
