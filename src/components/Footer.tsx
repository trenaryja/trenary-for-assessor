import { Logo } from '@/components/Logo'
import Image from 'next/image'

export const Footer = () => {
  return (
    <footer className='full-bleed-container full-bleed bg-base-200'>
      <div className='grid sm:grid-flow-col place-items-center gap-8'>
        <Logo />
        <Image src='/qr-code.svg' alt='qr code' className='size-32 sm:size-20' width={2277} height={2277}/>
      </div>
    </footer>
  )
}
