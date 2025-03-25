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

          if (!user) {
            throw new Error('Invalid credentials.')
          }

          return user
        } catch (error) {
          if (error instanceof ZodError) {
            return null
          }
          return null
        }
      },
    }),
  ],
})
