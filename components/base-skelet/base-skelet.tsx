import React, { ReactNode } from 'react'
import Header from '@/components/handmade/header/header'
import Footer from '@/components/handmade/footer/footer'
import { cn } from '@/lib/utils'

type Props = {
  children: ReactNode
  className?: string
}

const BaseSkelet = ({ children, className }: Props) => {
  return (
    <div className="wrapper">
      <Header />
      <div className={cn('main', className)}>{children}</div>
      <Footer />
    </div>
  )
}

export default BaseSkelet
