import BaseSkelet from '@/components/base-skelet/base-skelet'
import Heading from '@/components/handmade/typography/headings'
import Text from '@/components/handmade/typography/paragraphs'
import ResponsiveContainer from '@/components/responsive-container/responsive-container'
import React from 'react'

const Page = () => {
  return (
    <BaseSkelet>
      <ResponsiveContainer>
        <Heading className="mb-[0.25em] text-[44px]" order={1}>
          About page
        </Heading>
        <div className="flex flex-col gap-5">
          <Text>This page describes the essentials of this project</Text>
        </div>
      </ResponsiveContainer>
    </BaseSkelet>
  )
}

export default Page
