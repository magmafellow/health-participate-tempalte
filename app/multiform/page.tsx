'use client'

import Button from '@/components/handmade/button/button'
import { AuthDialog } from './dialog'
import useAuthModalStore from '@/stores/dialogs/auth-modal-store'

const Page = () => {
  const { opened, setActiveState } = useAuthModalStore()

  return (
    <>
      <div>
        <Button onClick={() => setActiveState(true)}>Start Auth</Button>
      </div>
      <AuthDialog />
    </>
  )
}

export default Page
