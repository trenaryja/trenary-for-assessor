import Link from 'next/link'
import { Heading } from '../Heading'
import { Section } from './Section'

const email = 'trenaryforassessor@gmail.com'
const href = `mailto:${email}`

export const Contact = () => {
	return (
		<Section id='contact'>
			<div className='grid gap-4 place-items-center'>
				<Heading size='h2'>Contact</Heading>
				<Link href={href} className='link'>
					{email}
				</Link>
				<Link href={href} target='_blank' className='btn btn-primary'>
					Email me
				</Link>
			</div>
		</Section>
	)
}
