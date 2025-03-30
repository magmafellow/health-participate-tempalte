import { cn } from '@/lib/utils'
import { cva } from 'class-variance-authority'
import React from 'react'

type ComponentProps = {
  className?: string
  _size?: 's' | 'm'
} & React.ComponentProps<'input'>

const inputVariants = cva(
  //   dark:focus-visible:outline-blue/75 dark:focus-visible:data-[errored=true]:outline-red/50
  `
  border dark:border-grayC outline-2 outline-transparent outline-offset-2
  dark:bg-blackC dark:focus:border-grayB dark:text-gray dark:focus:text-whiteB

  dark:data-[errored=true]:border-red
`,
  {
    variants: {
      _size: {
        s: 'fr',
        m: 'py-[10.5px] px-2.5 rounded-[var(--input-radius-m)]',
      },
    },
    defaultVariants: {
      _size: 'm',
    },
  }
)

function Input({ className, type, _size = 'm', ...props }: ComponentProps) {
  return (
    <input
      type={type}
      className={cn(inputVariants({ _size }), className)}
      {...props}
    />
  )
}

export default Input
