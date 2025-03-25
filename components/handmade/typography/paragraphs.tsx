import { ubuntu } from '@/font/font'
import { cn } from '@/lib/utils'
import { cva } from 'class-variance-authority'
import React, { JSX, ReactNode } from 'react'

type ComponentProps = {
  children: ReactNode
  className?: string
  size?: 's' | 'm'
}

const paragraphVariants = cva('dark:text-whiteB', {
  variants: {
    size: {
      s: 'text-xs',
      m: 'text-sm',
    },
  },
  defaultVariants: {
    size: 'm',
  },
})

const Text = ({ size = 'm', children, className }: ComponentProps) => {
  let CompOrder: keyof JSX.IntrinsicElements = 'div'

  return (
    <CompOrder
      className={cn(ubuntu.variable, paragraphVariants({ size }), className)}
      children={children}
    />
  )
}

export default Text
