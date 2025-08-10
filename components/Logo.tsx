import { FaStar } from 'react-icons/fa'

export const Logo = () => {
	return (
		<>
			<div className='grid text-center'>
				<h1 className='text-5xl tracking-tight font-black'>TRENARY</h1>
				<div className='flex justify-center gap-2 items-center'>
					<FaStar className='animate-pulse' />
					<h2 className='text-xl font-bold tracking-widest'>FOR ASSESSOR</h2>
					<FaStar className='animate-pulse' />
				</div>
			</div>
		</>
	)
}
