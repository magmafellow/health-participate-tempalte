import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
}

const ResponsiveContainer = ({ children, className }: Props) => {
  return (
    <div className={
      cn('px-5 w-full md:max-w-[768px] lg:max-w-[1024px] lgB:max-w-[1080px] mx-auto', className)
    }>
      {children}
    </div>
  )
}

export default ResponsiveContainer