import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { FixedHeader } from '@/components/fixed_header'
import { SideBar } from '@/components/side_bar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'St.Pavlov Data Department',
  description: 'St.Pavlov Data Department is a non-profit organization, which collects item drop data for mobile game Reverse:1999 and analizes statistical results.',
}

export default function RootLayout(
  { children }: { children: React.ReactNode }
) {
  return (
    <html lang="en">
      <head>
        {/* font for github icon */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
      </head>
      <body className={inter.className} style={{ paddingTop: 100 }} >
        <div className="h-screen flex flex-row justify-start">
          <SideBar />
          <div className="w-full flex">
            <FixedHeader />

            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
