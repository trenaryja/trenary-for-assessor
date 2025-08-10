import { cn } from '../utils'

export type BackgroundVideoProps = React.ComponentProps<'video'>

export const BackgroundVideo = ({ className, ...props }: BackgroundVideoProps) => {
	return (
		<video
			autoPlay
			muted
			loop
			className={cn('fixed inset-0 w-screen h-screen object-cover z-[-1] opacity-10', className)}
			{...props}
		/>
	)
}
