'use client'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import useDevNavStore from '@/stores/dialogs/dev-nav-store'
import React from 'react'

type Props = {}

const DevNavDialog = () => {
  const { opened, setActiveState } = useDevNavStore()

  return (
    <Dialog open={opened} onOpenChange={setActiveState}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default DevNavDialog
