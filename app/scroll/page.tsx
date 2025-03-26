import BaseSkelet from '@/components/base-skelet/base-skelet'
import Heading from '@/components/handmade/typography/headings'
import Text from '@/components/handmade/typography/paragraphs'
import ResponsiveContainer from '@/components/responsive-container/responsive-container'
import React from 'react'

const Page = () => {
  return (
    <BaseSkelet>
      <ResponsiveContainer>
        <Heading className="mb-[0.25em]" order={1}>
          Scroll page
        </Heading>
        <div className="h-[2500px] w-[30px] bg-blue"></div>
      </ResponsiveContainer>
    </BaseSkelet>
  )
}

export default Page
