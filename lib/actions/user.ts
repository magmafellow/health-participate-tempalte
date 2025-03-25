'use server'

import { signIn } from '@/auth'
import { db } from '@/db'
import { usersTable } from '@/schema'
import { User } from '@/types/user'
import { and, eq } from 'drizzle-orm'

export async function getUserFromDb(username: string, password: string): Promise<null | User> {
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


export async function credentialsAction (formData: FormData) {
  signIn('credentials', formData)
}
