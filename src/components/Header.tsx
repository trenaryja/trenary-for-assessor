import { Logo } from '@/components/Logo'
import Link from 'next/link'
import { ComponentProps } from 'react'

const HeaderLink = (props: ComponentProps<typeof Link>) => (
  <li>
    <Link {...props} className='link link-hover font-bold' />
  </li>
)

export const Header = () => {
  return (
    <header className='grid justify-center gap-4 sm:justify-between sm:flex p-4 items-end bg-base-200'>
      <Logo />
      <nav className='text-lg'>
        <ul className='flex gap-4 whitespace-nowrap'>
          <HeaderLink className='link link-hover font-bold' href={'#meet-joe'} children='Meet Joe' />
          <HeaderLink className='link link-hover font-bold' href={'#issues'} children='Issues' />
          <HeaderLink className='link link-hover font-bold' href={'#contact'} children='Contact' />
        </ul>
      </nav>
    </header>
  )
}
