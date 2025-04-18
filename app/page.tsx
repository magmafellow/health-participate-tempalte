import Button from '@/components/handmade/button/button'
import RippledButton from '@/components/handmade/rippled-button/rippled-button'
import React from 'react'

const Page = () => {
  return (
    <div className='flex flex-col gap-12 items-start'>
      <Button>HandMade</Button>
      <Button semantic='neutral'>GrayMode</Button>
      <Button semantic='accent' mode='ghost'>GrayMode</Button>
      <Button semantic='accent' mode='outline'>GrayMode</Button>

      <hr />
      <Button size='s'>HandMade</Button>
      <Button semantic='neutral' size='s'>GrayMode</Button>
      <Button semantic='accent' mode='ghost' size='s'>GrayMode</Button>
      <Button semantic='accent' mode='outline' size='s'>GrayMode</Button>
    </div>
  )
}

export default Page
