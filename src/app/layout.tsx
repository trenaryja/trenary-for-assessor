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
    <html suppressHydrationWarning lang='en' className='scroll-smooth'>
      <head>
        <script src='/theme.js' />
      </head>
      <body className={cn(font.className, 'grid grid-rows-[auto_1fr_auto] min-h-[100dvh]')}>
        <Header />
        <main className='full-bleed-container'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
