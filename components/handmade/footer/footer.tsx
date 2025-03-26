import ResponsiveContainer from '@/components/responsive-container/responsive-container'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Heading from '@/components/handmade/typography/headings'
import Text from '../typography/paragraphs'
import Input from '../input/input'
import Button from '../button/button'

const Footer = () => {
  return (
    <footer className="bg-grayC">
      <ResponsiveContainer className="px-5 py-5 md:py-[27px] lg:py-[37px]">
        <div className={`footer_inner flex justify-between`}>
          <div className="flex items-start gap-8 md:gap-10 lg:gap-20">
            <button className="bg-hm_test/10 p-2 rounded-xl shrink-0">
              <Image
                src="/assets/images/util/logotype.svg"
                alt="logotype"
                width={47}
                height={47}
              />
            </button>

            <div className="flex gap-6 sm:gap-[60px] text-[14px]">
              <ul className="flex flex-col gap-4">
                <li>
                  <Link href="#">home</Link>
                </li>
                <li>
                  <Link href="#">features</Link>
                </li>
                <li>
                  <Link href="#">business hours</Link>
                </li>
              </ul>
              <ul className="flex flex-col gap-4">
                <li>
                  <Link href="#">about</Link>
                </li>
                <li>
                  <Link href="#">another page</Link>
                </li>
                <li>
                  <Link href="#">something new</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="hidden md:block">
            <Heading order="util_01" className="text-whiteC mb-1">
              Subscribes to news
            </Heading>
            <Text className="mb-1" size="s">
              Get important news of us
            </Text>
            <div className="flex gap-1">
              <Input placeholder="example@gmail.com" />
              <Button semantic="secondary">OK</Button>
            </div>
          </div>
        </div>
      </ResponsiveContainer>
    </footer>
  )
}

export default Footer
