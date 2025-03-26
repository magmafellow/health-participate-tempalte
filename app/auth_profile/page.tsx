import { auth } from '@/auth'
import SyntaxCodeBlock from '@/components/handmade/syntax-code-block/syntax-code-block'
import Heading from '@/components/handmade/typography/headings'
import React from 'react'

const Page = async () => {
  const session = await auth()
  console.log('session', session)
  const jsonedUserData = JSON.stringify(session?.user, null, 2)

  return (
    <div className='py-3 px-5'>
      <Heading order={4} seo={false}>User session JSON</Heading>
      <div className="rounded-3xl max-w-[500px]">
        <SyntaxCodeBlock codeSnippet={jsonedUserData} />
      </div>
    </div>
  )
}

export default Page
