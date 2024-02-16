'use client'

import { useCountdown } from '@/hooks/useCountdown'
import { cn } from '@/lib/utils'
import { format } from 'date-fns'
import { Heading } from './Heading'

export type CountdownProps = {
  date: Date
} & React.ComponentProps<'div'>

const CountdownItem = ({ value, label }: { value: number; label: string }) => (
  <div className='grid place-items-center'>
    <span className='uppercase text-xs'>{label}</span>
    <Heading size='h3' className='font-black'>
      {value}
    </Heading>
  </div>
)
const Divider = () => <span className='text-2xl'>:</span>

export const Countdown = ({ date, className, ...props }: CountdownProps) => {
  const [days, hours, minutes, seconds] = useCountdown(date)

  return (
    <div className={cn('grid place-items-center gap-4', className)}>
      <Heading size='h3'>{format(date, 'PPP')}</Heading>
      <div className='grid grid-flow-col place-items-center gap-4'>
        <CountdownItem value={days} label='days' />
        <Divider />
        <CountdownItem value={hours} label='hours' />
        <Divider />
        <CountdownItem value={minutes} label='minutes' />
        <Divider />
        <CountdownItem value={seconds} label='seconds' />
      </div>
    </div>
  )
}
