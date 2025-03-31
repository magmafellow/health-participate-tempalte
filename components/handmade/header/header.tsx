'use client'

import ResponsiveContainer from '@/components/responsive-container/responsive-container'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from '@/components/handmade/button/button'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import { capitalizeFirstLetter } from '@/lib/util'

const Header = () => {
  return (
    <div className="[--header-h-lg:100px] [--header-h-md:80px] [--header-h:60px]">
      <header className="fixed top-0 left-0 w-full">
        <ResponsiveContainer className="bg-grayC rounded-b-[10px] h-full">
          <div
            className={`header_inner h-[var(--header-h)] md:h-[var(--header-h-md)] lg:h-[var(--header-h-lg)] flex justify-between items-center`}
          >
            <div className="flex gap-5 items-center">
              <Logo />
              <NavList />
            </div>

            <BurgerMenuButton className="lg:hidden" />
            <Button
              className="hidden lg:inline-flex"
              semantic={'neutral'}
              mode={'ghost'}
            >
              Book a call to us
            </Button>
          </div>
        </ResponsiveContainer>
      </header>
      <div className="h-[var(--header-h)] md:h-[var(--header-h-md)] lg:h-[var(--header-h-lg)] mb-6 md:mb-8 lg:mb-10"></div>
    </div>
  )
}

const Logo = () => {
  return (
    <button className="bg-hm_test/10 rounded-xl p-2">
      <Image
        src="/assets/images/util/logotype.svg"
        alt="logotype"
        width={47}
        height={47}
      />
    </button>
  )
}

const NavList = () => {
  const activeClass = 'dark:!text-blue !underline'
  const pathname = usePathname()

  const navItems = [
    {
      name: 'home',
      url: '/home',
    },
    {
      name: 'about',
      url: '/about',
    },

    {
      name: 'signup',
      url: '/signup',
    },
    {
      name: 'login',
      url: '/login',
    },
    {
      name: 'scroll',
      url: '/scroll',
    },
    {
      name: 'profile',
      url: '/auth_profile',
    },
  ]

  return (
    <nav>
      <ul className="hidden lg:flex gap-4 items-center font-semibold">
        {navItems.map(el => (
          <li key={el.url}>
            <Link
              className={`${
                pathname.includes(el.url) ? activeClass : ''
              } text-sm dark:text-blue/75 dark:hover:text-blue/90`}
              href={el.url}
            >
              {capitalizeFirstLetter(el.name)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

type TBurgerMenuButton = {
  className?: string
}

const BurgerMenuButton = ({ className }: TBurgerMenuButton) => {
  return (
    <button className={cn('dark:bg-hm_test/10 rounded-md p-2', className)}>
      <Image
        src="/assets/icons/util/burger-menu.svg"
        height={20}
        width={20}
        alt="burger-menu opener button"
      ></Image>
    </button>
  )
}

export default Header
