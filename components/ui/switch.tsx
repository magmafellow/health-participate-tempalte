'use client'

import * as React from 'react'
import * as SwitchPrimitive from '@radix-ui/react-switch'

import { cn } from '@/lib/utils'

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        `peer data-[state=checked]:bg-whiteB data-[state=unchecked]:bg-grayC
        inline-flex h-[16px] cursor-pointer
        w-8 shrink-0 items-center rounded-[8px] transition-all
        `,
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          `bg-blackB dark:data-[state=unchecked]:bg-blackB
          dark:data-[state=checked]:bg-blackB pointer-events-none
          block size-[14px] rounded-full ring-0 transition-transform
          data-[state=checked]:translate-x-[calc(14px+2px)]
          data-[state=unchecked]:translate-x-[2px]`
        )}
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }
