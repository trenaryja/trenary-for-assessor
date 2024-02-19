'use client'

import { LinkId, cn } from '@/lib/utils'
import React, { ComponentProps } from 'react'

export type SectionProps = ComponentProps<'section'> & { id: LinkId }

export const Section = ({ id, children, className, ...props }: SectionProps) => {
  const ref = React.useRef(null)
  const [inView, setInView] = React.useState(false)
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setInView(entry.isIntersecting))
    })
    observer.observe(ref.current!)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      id={id}
      className={cn(
        'grid place-items-center min-h-screen px-4 py-8 transition-all duration-500 delay-100',
        inView ? 'opacity-100 blur-0 scale-x-100' : 'opacity-0 blur-3xl scale-x-75',
        className,
      )}
      {...props}
    >
      {children}
    </section>
  )
}
