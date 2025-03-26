import BaseSkelet from '@/components/base-skelet/base-skelet'
import Heading from '@/components/handmade/typography/headings'
import Text from '@/components/handmade/typography/paragraphs'
import ResponsiveContainer from '@/components/responsive-container/responsive-container'
import React from 'react'

const Page = () => {
  return (
    <BaseSkelet>
      <ResponsiveContainer>
        <Heading className='mb-[0.25em]' order={1}>Home page</Heading>
        <div className="flex flex-col gap-5">
          <Text>The brown fox jumps over the lazy dog. The brown fox jumps over the lazy dog. The brown fox jumps over the lazy dog. The brown fox jumps over the lazy dog. The brown fox jumps over the lazy dog. The brown fox jumps over the lazy dog. The brown fox jumps over the lazy dog</Text>
          <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, temporibus?</Text>
          <Text>The brown fox jumps over the lazy dog. The brown fox jumps over the lazy dog. The brown fox jumps over the lazy dog. The brown fox jumps over the lazy dog. The brown fox jumps over the lazy dog. The brown fox jumps over the lazy dog. The brown fox jumps over the lazy dog</Text>
        </div>
      </ResponsiveContainer>
    </BaseSkelet>
  )
}

export default Page
