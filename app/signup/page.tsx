import BaseSkelet from '@/components/base-skelet/base-skelet'
import SigninForm from '@/components/handmade/auth/signin-form'
import SignupForm from '@/components/handmade/auth/signup-form'
import Heading from '@/components/handmade/typography/headings'
import Text from '@/components/handmade/typography/paragraphs'
import ResponsiveContainer from '@/components/responsive-container/responsive-container'
import React from 'react'

const Page = () => {
  return (
    <BaseSkelet className="flex flex-col justify-center items-center">
      <ResponsiveContainer className="flex justify-center">
        <SignupForm />
      </ResponsiveContainer>
    </BaseSkelet>
  )
}

export default Page
