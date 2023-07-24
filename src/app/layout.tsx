import { FixedHeader } from '@/components/fixed_header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

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
      <FixedHeader />

      <body className={inter.className} style={{paddingTop: 100}} >{children}</body>
    </html>
  )
}
