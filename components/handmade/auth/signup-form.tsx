'use client'

import React, { useState } from 'react'
import Heading from '@/components/handmade/typography/headings'
import Text from '@/components/handmade/typography/paragraphs'
import Input from '@/components/handmade/input/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import Button from '../button/button'
import { cn } from '@/lib/utils'
import { createNewAccount } from '@/lib/actions/user'
import { signupFormSchema, TSignupFormSchema } from '@/zod/auth'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

type Props = {
  className?: string
}

const SignupForm = ({ className }: Props) => {
  const router = useRouter()
  
  const form = useForm<TSignupFormSchema>({
    resolver: zodResolver(signupFormSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  })
  const [isPending, setIsPending] = useState(false)

  async function onSubmit(values: TSignupFormSchema) {
    console.log('values from test form', values)
    form.reset()

    setIsPending(true)
    const response = await createNewAccount(values)
    if (response.success) {
      // toast('hello there', {
      //   description: 'Sunday, December 03, 2023 at 9:00 AM',
      //   action: {
      //     label: 'Undo',
      //     onClick: () => console.log('Undo'),
      //   },
      // })
      toast('System registered new account. Now you will be redirected to login page')

      setTimeout(() => {
        router.push('/login')
      }, 3500)
    } else {
      toast('System did not register your account')
    }
    setIsPending(false)
  }

  return (
    <Form {...form}>
      <form
        className={cn(
          `p-6 border max-w-[382px] dark:border-gray rounded-[var(--form-radius)]`,
          className
        )}
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <Heading order={4} className="mb-1.5">
          Signup Form
        </Heading>
        <Text className="mb-6">Register new account</Text>
        <div className="flex flex-col gap-6">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <Heading
                  className="dark:text-whiteC mb-1"
                  order="util_01"
                  seo={false}
                >
                  Username
                </Heading>
                <FormControl>
                  <Input {...field} disabled={isPending} placeholder="Your username..." />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="flex flex-col items-stretch">
                <Heading
                  className="dark:text-whiteC mb-1"
                  order="util_01"
                  seo={false}
                >
                  Password
                </Heading>
                <FormControl>
                  <Input {...field} disabled={isPending} placeholder="Your secure password..." />
                </FormControl>
              </FormItem>
            )}
          />
          <Button disabled={isPending} semantic="neutral" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </Form>
  )
}

export default SignupForm
