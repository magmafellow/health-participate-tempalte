import SigninForm from '@/components/handmade/auth/signin-form'
import TestForm from '@/components/handmade/auth/test-form'
import Footer from '@/components/handmade/footer/footer'
import Header from '@/components/handmade/header/header'
import Heading from '@/components/handmade/typography/headings'
import ResponsiveContainer from '@/components/responsive-container/responsive-container'
import React from 'react'

const Page = () => {
  return (
    <div className='wrapper'>
      <Header />

      <ResponsiveContainer className='main content-center'>
        <SigninForm className='mx-auto' />
      </ResponsiveContainer>

      <Footer />
    </div>
  )
}

export default Page
