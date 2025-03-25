import { ubuntu } from '@/font/font'
import { cn } from '@/lib/utils'
import { cva } from 'class-variance-authority'
import React, { JSX, ReactNode } from 'react'

type ComponentProps = {
  seo?: boolean
  children: ReactNode
  className?: string
  order: 1 | 2 | 3 | 4 | 5 | 6 | 'util_01'
}

const headingVariants = cva('font-[family-name:var(--font-ubuntu)] font-bold', {
  variants: {
    order: {
      1: 'text-[54px]',
      2: 'text-[36px]',
      3: 'text-[30px]',
      4: 'text-[24px]',
      5: 'text-[20px]',
      6: 'text-[18px]',
      util_01: 'text-[14px]',
    },
  },
  defaultVariants: {
    order: 1,
  },
})

const Heading = ({ order, seo, children, className }: ComponentProps) => {
  let CompOrder: keyof JSX.IntrinsicElements = 'div'

  if (seo) {
    switch (order) {
      case 1:
        CompOrder = 'h1'
        break
      case 2:
        CompOrder = 'h2'
        break
      case 3:
        CompOrder = 'h3'
        break
      case 4:
        CompOrder = 'h4'
        break
      case 5:
        CompOrder = 'h5'
        break
      case 6:
        CompOrder = 'h6'
        break
      default:
        const errMessage = `Impossible to determine <CompOrder /> for heading.\n
                            Be aware, You should NOT use seo when using util_<n> headings.
                            Instead use seo=false`
        throw new Error(errMessage)
    }
  }

  return (
    <CompOrder
      className={cn(ubuntu.variable, headingVariants({ order }), className)}
      children={children}
    />
  )
}

export default Heading
