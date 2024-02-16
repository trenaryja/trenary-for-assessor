import { LinkId, cn } from '@/lib/utils'
import { ComponentProps } from 'react'

export type SectionProps = ComponentProps<'section'> & { id: LinkId }

export const Section = ({ id, children, className, ...props }: SectionProps) => {
  return (
    <section id={id} className={cn('grid place-items-center h-screen p-4', className)} {...props}>
      {children}
    </section>
  )
}
