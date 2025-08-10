import { Logo } from '@/components/Logo'
import Link from 'next/link'
import { ComponentProps } from 'react'
import { links } from '../utils'

const HeaderLink = (props: ComponentProps<typeof Link>) => (
	<li>
		<Link {...props} className='font-bold btn btn-primary' />
	</li>
)

export const Header = () => {
	return (
		<header className='full-bleed-container full-bleed bg-base-200'>
			<div className='grid sm:grid-flow-col place-items-center gap-4'>
				<Logo />
				<nav className='text-lg'>
					<ul className='flex gap-4 whitespace-nowrap'>
						{links.map((link) => (
							<HeaderLink key={link.id} href={`#${link.id}`}>
								{link.label}
							</HeaderLink>
						))}
					</ul>
				</nav>
			</div>
		</header>
	)
}
