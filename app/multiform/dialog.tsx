import useAuthModalStore from '@/stores/dialogs/auth-modal-store'
import React, { useEffect, useRef, useState } from 'react'
import { z } from 'zod'
import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import Heading from '@/components/handmade/typography/headings'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Input from '@/components/handmade/input/input'
import Text from '@/components/handmade/typography/paragraphs'
import Button from '@/components/handmade/button/button'
import type { MaskitoOptions } from '@maskito/core'
import { useMaskito } from '@maskito/react'

const formUserSchema = z.object({
  username: z.string().min(3),
  phone: z.string().min(3),
})
type TFormUserSchema = z.infer<typeof formUserSchema>

const codeMask: MaskitoOptions = {
  mask: [/\d/, ' ', /\d/, ' ', /\d/, ' ', /\d/],
}

const formCodeSchema = z.object({
  code: z.string().length(7), // 8 because 4 numbers 3-between spaces
})
type TFormCodeSchema = z.infer<typeof formCodeSchema>

const AuthDialog = () => {
  const { opened, setActiveState } = useAuthModalStore()
  const [step, setStep] = useState(0)

  const codeInputRef = useMaskito({ options: codeMask })

  const userForm = useForm<TFormUserSchema>({
    resolver: zodResolver(formUserSchema),
    defaultValues: {
      username: '',
      phone: '',
    },
  })

  const codeForm = useForm<TFormCodeSchema>({
    resolver: zodResolver(formCodeSchema),
    defaultValues: {
      code: '',
    },
  })

  function userFormSubmitHandler(values: TFormUserSchema) {
    setStep(1)
  }

  function codeFormSubmitHandler(values: TFormCodeSchema) {
    setActiveState(false)
    setStep(0)
    userForm.reset()
    codeForm.reset()
  }

  return (
    <Dialog open={opened} onOpenChange={setActiveState}>
      <DialogContent>
        <DialogHeader>
          <Heading order={4}>
            {step === 0 ? (
              <span>
                User info step{' '}
                <span className="dark:text-blue">{step + 1}</span>
                <span className="dark:text-gray">/2</span>
              </span>
            ) : (
              <span>
                Code step <span className="dark:text-blue">{step + 1}</span>
                <span className="dark:text-gray">/2</span>
              </span>
            )}
          </Heading>
          <Text>
            {step === 0
              ? 'Put in your user credentials'
              : 'Enter the code you received'}
          </Text>
        </DialogHeader>
        <div className={step === 0 ? '' : 'hidden'}>
          <Form {...userForm}>
            <form
              onSubmit={userForm.handleSubmit(userFormSubmitHandler)}
              className="space-y-[26px]"
            >
              <FormField
                control={userForm.control}
                name="username"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="mb-1">Username</FormLabel>
                    <FormControl>
                      <Input placeholder="username..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={userForm.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="mb-1">Phone</FormLabel>
                    <FormControl>
                      <Input placeholder="+7 (xxx) xxx xx-xx" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex">
                <Button
                  className="w-full uppercase"
                  semantic="secondary"
                  mode="outline"
                >
                  next
                </Button>
              </div>
            </form>
          </Form>
        </div>
        <div className={step === 1 ? '' : 'hidden'}>
          <Form {...codeForm}>
            <form
              onSubmit={codeForm.handleSubmit(codeFormSubmitHandler)}
              className="space-y-[26px]"
            >
              <FormField
                control={codeForm.control}
                name="code"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="mb-1">Code</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="X X X X"
                        onBlur={_event => {
                          field.onBlur()
                        }}
                        onInput={event => {
                          field.onChange(event)
                        }}
                        value={field.value}
                        name={field.name}
                        ref={node => {
                          field.ref(node)
                          codeInputRef(node)
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex">
                <Button
                  className="w-full uppercase"
                  semantic="secondary"
                  mode="outline"
                >
                  send
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export { AuthDialog }
