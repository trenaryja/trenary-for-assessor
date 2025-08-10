import { Logo } from '@/components/Logo'
import Image from 'next/image'
import QR from '/public/qr-code.svg'

export const Footer = () => {
	return (
		<footer className='full-bleed-container full-bleed bg-base-200'>
			<div className='grid sm:grid-flow-col place-items-center gap-8'>
				<Logo />
				<Image src={QR} alt='qr code' className='size-32 sm:size-20' />
			</div>
		</footer>
	)
}
