import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet-burger'

type Props = {
  opened: boolean
  setActiveState: (state: boolean) => void
}

const BurgerMenuSheet = ({ opened, setActiveState }: Props) => {
  
  return (
    <Sheet open={opened} onOpenChange={setActiveState}>
      <SheetContent side='right'>
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}

export default BurgerMenuSheet
