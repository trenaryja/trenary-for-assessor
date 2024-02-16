/* eslint-disable @next/next/no-sync-scripts */
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

export const metadata: Metadata = {
  title: 'Trenary For Assessor',
  description: 'Elect Joseph Trenary for Berkeley County Assessor',
}

const font = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html suppressHydrationWarning lang='en'>
      <head>
        <script src='/theme.js' />
      </head>
      <body className={cn(font.className, 'grid grid-rows-[auto_1fr_auto] min-h-[100dvh]')}>
        <Header />
        <main className='grid grid-cols-[1fr_min(80ch,_100%)_1fr] [&>*]:col-[2] [&>.full-bleed]:col-[1/4] p-4'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
