'use client'

import React, { ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SessionProvider } from 'next-auth/react'

type Props = {
  children: ReactNode
}

const queryClient = new QueryClient()

const Provider = ({ children }: Props) => {
  return (
    <>
      <SessionProvider>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </SessionProvider>
    </>
  )
}

export default Provider
