import React from 'react'
import Heading from '@/components/handmade/typography/headings'
import Text from '@/components/handmade/typography/paragraphs'
import Input from '@/components/handmade/input/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import Button from '../button/button'
import { signIn } from '@/auth'
import { credentialsActionSignIn } from '@/lib/actions/user'
import { cn } from '@/lib/utils'

const formSchema = z.object({
  username: z.string().min(2).max(12),
  password: z.string().min(3).max(24),
})

type Props = {
  className?: string
}

const SigninForm = ({ className }: Props) => {
  return (
    <form
      className={cn(
        `p-6 border w-[382px] max-w-full dark:border-gray rounded-[var(--form-radius)]`,
        className
      )}
      action={credentialsActionSignIn}
    >
      <Heading order={4} className="mb-1.5">
        Login
      </Heading>
      <Text className="mb-6">Come in your account</Text>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col">
          <Heading
            className="dark:text-whiteC mb-1"
            order="util_01"
            seo={false}
          >
            Username
          </Heading>
          <Input name="username" placeholder="Your username..." />
        </div>

        <div className="flex flex-col">
          <Heading
            className="dark:text-whiteC mb-1"
            order="util_01"
            seo={false}
          >
            Password
          </Heading>
          <Input name="password" placeholder="Your secure password..." />
        </div>

        <Button semantic="neutral" type="submit">
          submit
        </Button>
      </div>
    </form>
  )
}

export default SigninForm
