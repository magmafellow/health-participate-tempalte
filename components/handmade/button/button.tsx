import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import React, { ReactNode } from 'react'

import styles from './button.module.scss'

const buttonVariants = cva(
  `${styles.button} inline-flex justify-center items-center duration-1000 font-semibold outline-transparent`,
  {
    variants: {
      semantic: {
        accent:
          'dark:bg-hm_accent dark:hover:bg-hm_accentB dark:focus-visible:outline-hm_accent dark:hover:focus-visible:outline-hm_accentB',
        neutral:
          'dark:bg-gray dark:disabled:!bg-amber-800 dark:hover:bg-grayB dark:focus-visible:outline-whiteB dark:hover:focus',
      },
      mode: {
        primary: '1',
        secondary: '',
        ghost:
          'dark:bg-transparent dark:focus-visible:!outline-gray dark:focus-visible:active:!outline-grayB dark:hover:!bg-gray dark:active:!bg-grayB',
        outline: `dark:bg-transparent dark:border dark:border-gray dark:hover:!bg-gray/30
              dark:focus-visible:!outline-gray dark:focus-visible:border-transparent dark:focus-visible`,
      },
      size: {
        // lg: TODO
        lg: 'py-3.5 px-5 rounded-[5px] text-sm outline-offset-[3px] outline-2',
        m: 'py-[9px] px-4 rounded-[5px] text-sm outline-offset-[2px] outline-2',
        s: 'py-2 px-3 rounded-[3px] text-xs outline-offset-[2px] outline-1',
      },
    },
    compoundVariants: [
      {
        semantic: 'accent',
        mode: 'ghost',
        className: 'dark:focus-visible:!outline-hm_accent dark:focus-visible:active:!outline-hm_accentB dark:hover:!bg-hm_accent dark:active:!bg-hm_accentB',
      }
    ],
    defaultVariants: {
      semantic: 'accent',
      mode: 'primary',
      size: 'm',
    },
  }
)

type Props = React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants>

const Button = ({
  semantic = 'accent',
  mode = 'primary',
  size = 'm',
  children = 'auto_text',
  className = '',
  ...props
}: Props) => {
  return (
    <button
      {...props}
      className={cn(buttonVariants({ semantic, mode, size, className }))}
    >
      {children}
    </button>
  )
}

export default Button
