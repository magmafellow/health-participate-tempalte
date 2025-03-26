'use client'

import Heading from '@/components/handmade/typography/headings'
import Text from '@/components/handmade/typography/paragraphs'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { cn } from '@/lib/utils'
import useUserJsonSessionStore from '@/stores/dialogs/user-json-session-store'
import React from 'react'
import { useSession } from 'next-auth/react'

type Props = {}

const UserJsonSessionDialog = () => {
  const { opened, setActiveState } = useUserJsonSessionStore()
  const { data: session } = useSession()

  const sessionString = JSON.stringify(session?.user, null, 2)
  
  return (
    <Dialog open={opened} onOpenChange={setActiveState}>
      <DialogContent>
        <DialogHeader>
          <Heading order={6}>User JSON</Heading>
          <Text>The user that resides in the current session</Text>
        </DialogHeader>
        <div className="dialog_content">
          <div className={`w-2 h-2 rounded-full mb-1 ml-2 ${sessionString ? 'bg-green' : 'bg-red'}`}></div>

          <SimpleHighlight
            textSnippet={sessionString}
            className="max-w-[60%]"
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}

type TSimpleHighlight = {
  textSnippet?: string
  className?: string
}

const SimpleHighlight = ({ textSnippet, className }: TSimpleHighlight) => {
  let content: string | undefined = textSnippet
  if (!content) {
    content = 'You did not provided textSnippet. It is Placeholder'
  }

  return (
    <div
      className={cn(
        `rounded-[12px] border text-[14px] border-gray p-4 text-green`,
        className
      )}
    >
      <pre>{content}</pre>
    </div>
  )
}

export default UserJsonSessionDialog
