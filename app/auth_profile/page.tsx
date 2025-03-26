import { auth, signOut } from '@/auth'
import Button from '@/components/handmade/button/button'
import RippledButton from '@/components/handmade/rippled-button/rippled-button'
import SyntaxCodeBlock from '@/components/handmade/syntax-code-block/syntax-code-block'
import Heading from '@/components/handmade/typography/headings'
import React from 'react'

const Page = async () => {
  const session = await auth()
  const jsonedUserData = JSON.stringify(session?.user, null, 2)

  return (
    <div className="py-3 px-5">
      <Heading className='mb-4' order={4} seo={false}>
        User session JSON
      </Heading>
      <div className="rounded-3xl max-w-[500px] mb-4">
        {session?.user ? <SyntaxCodeBlock codeSnippet={jsonedUserData} /> : 'user session does not exist'}
      </div>
      <form
        action={async () => {
          'use server'
          await signOut()
        }}
      >
        <Button semantic='secondary' mode='outline'>Sign out</Button>
      </form>
    </div>
  )
}

export default Page
