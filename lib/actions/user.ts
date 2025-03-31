'use server'

import { signIn } from '@/auth'
import { db } from '@/db'
import { usersTable } from '@/schema'
import { User } from '@/types/user'
import { signupFormSchema, TSignupFormSchema } from '@/zod/auth'
import { and, eq } from 'drizzle-orm'

export async function getUserFromDb(
  username: string,
  password: string
): Promise<null | User> {
  const r = await db
    .select()
    .from(usersTable)
    .where(
      and(eq(usersTable.username, username), eq(usersTable.password, password))
    )

  if (r.length === 0) {
    return null
  }

  return r[0]
}

export async function credentialsActionSignIn(formData: FormData) {
  await signIn('credentials', {
    ...Object.fromEntries(formData.entries()),
    redirectTo: '/auth_profile',
  })
}

export async function createNewAccount(values: TSignupFormSchema) {
  const parsed = await signupFormSchema.safeParseAsync(values)
  if (parsed.success) {
    console.log('Successfully block')

    const r = await db.insert(usersTable).values(parsed.data).returning()
    return { message: 'Successfuly created new account', success: true }
  } else {
    console.log('Encountered error')
    return {
      message: 'Something went wrong when creating account',
      success: false,
    }
  }
}
