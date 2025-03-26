import type { Metadata } from 'next'
import { Geist, Geist_Mono, Quicksand } from 'next/font/google'
import './globals.css'
import './util.scss'
import DevNavButton from '@/components/handmade/utils/dialogs/dev-nav/dev-nav-button'
import DevNavDialog from '@/components/handmade/utils/dialogs/dev-nav/dev-nav-dialog'
import UserJsonSessionButton from '@/components/handmade/utils/dialogs/user-json-session/user-json-session-button'
import UserJsonSessionDialog from '@/components/handmade/utils/dialogs/user-json-session/user-json-session-dialog'
import Provider from '@/components/provider/provider'

const quickSand = Quicksand({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-quicksand',
})

export const metadata: Metadata = {
  title: 'Health-Participate_TEMPLATE',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`dark dark:bg-[#1A1918] ${quickSand.variable} antialiased`}
      >
        <Provider>
          {children}
          <div className={`dialogs_sematic_box`}>
            <DevNavDialog />
            <UserJsonSessionDialog />
          </div>
        </Provider>

        <div
          className={`fly_fixed_container fixed bottom-4 right-4 flex gap-2`}
        >
          <DevNavButton />
          <UserJsonSessionButton />
        </div>
      </body>
    </html>
  )
}
