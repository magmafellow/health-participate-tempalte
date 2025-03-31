import { z } from 'zod'

export const signupFormSchema = z.object({
  username: z.string().min(2).max(50),
  password: z.string().min(3).max(104),
})

export type TSignupFormSchema = z.infer<typeof signupFormSchema>
