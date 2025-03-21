import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
  semantic?: 'primary' | 'secondary'
  type?: 'default' | 'ghost' | 'outline'
  size?: 's' | 'm'
  className?: string
}

const Button = ({
  semantic = 'secondary',
  type = 'default',
  size = 'm',
  children = 'auto_text',
  className = '',
}: Props) => {
  let clnGeneral = 'inline-flex justify-center outline-transparent items-center text-white font-bold duration-200 cursor-pointer'
  let clnSize = ''
  let cln = ''

  if (size === 'm') {
    clnSize += 'h-[46px] px-5 rounded-[5px] text-sm outline-2 outline-offset-3'
  }

  if (semantic==='primary') {
    cln += 'bg-hm_accent hover:bg-hm_accentB focus:outline-hm_accent/70'
  }
  

  return (
    <button className={cn(clnGeneral, clnSize, cln, className)}>
      {children}
    </button>
  )
}

export default Button
