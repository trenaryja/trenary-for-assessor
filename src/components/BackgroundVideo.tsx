import { cn } from '@/lib/utils'

export type BackgroundVideoProps = React.ComponentProps<'video'>

export const BackgroundVideo = ({ className, ...props }: BackgroundVideoProps) => {
  return (
    <video
      autoPlay
      muted
      loop
      className={cn('fixed inset-0 w-full h-full object-cover z-[-1] opacity-10', className)}
      {...props}
    />
  )
}
