'use client'

import React from 'react'
import Heading from '@/components/handmade/typography/headings'
import Text from '@/components/handmade/typography/paragraphs'
import Input from '@/components/handmade/input/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import Button from '../button/button'
import { useMaskito } from '@maskito/react'
import { MaskitoOptions } from '@maskito/core'

const formSchema = z.object({
  username: z.string().min(2).max(50),
  password: z.string().min(3).max(104),
  phone_number: z.string().min(5),
})

const digitsOnlyMask: MaskitoOptions = {
  mask: [
    '+',
    '7',
    ' ',
    '(',
    /\d/,
    /\d/,
    /\d/,
    ')',
    ' ',
    /\d/,
    /\d/,
    /\d/,
    ' ',
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/,
  ],
}

const TestForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: '',
      phone_number: '',
    },
  })

  const numberRef = useMaskito({ options: digitsOnlyMask })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log('values from test form', values)
    console.log(values.phone_number.length)
    form.reset()
  }

  return (
    <Form {...form}>
      <form
        className={`p-6 border max-w-[382px] dark:border-gray rounded-[var(--form-radius)]`}
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <Heading order={4} className="mb-1.5">
          Test Form
        </Heading>
        <Text className="mb-6">Come in your account</Text>
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
                  <Input {...field} placeholder="Your username..." />
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
                  <Input {...field} placeholder="Your secure password..." />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone_number"
            render={({ field: { onChange, onBlur, ref, name, value } }) => (
              <FormItem className="flex flex-col items-stretch">
                <Heading
                  className="dark:text-whiteC mb-1"
                  order="util_01"
                  seo={false}
                >
                  Phone number
                </Heading>
                <FormControl>
                  <Input
                    value={value}
                    name={name}
                    onInput={e => {
                      onChange(e)
                    }}
                    onBlur={e => {
                      onBlur()
                    }}
                    ref={node => {
                      ref(node)
                      numberRef(node)
                    }}
                    placeholder="+7 (xxx) xxx yy-zz"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button semantic="secondary" type="submit">
            Test Submit
          </Button>
        </div>
      </form>
    </Form>
  )
}

export default TestForm
