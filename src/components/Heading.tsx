import { cn } from '@/lib/utils'
import { ComponentProps } from 'react'

const sizes = {
  h1: 'text-5xl sm:text-6xl md:text-7xl  font-extrabold',
  h2: 'text-3xl sm:text-4xl md:text-5xl  font-extrabold',
  h3: 'text-xl sm:text-2xl md:text-3xl  font-extrabold',
  h4: 'text-md sm:text-lg md:text-xl  font-extrabold',
  h5: 'text-base sm:text-lg  font-bold',
  h6: 'text-base font-bold',
}

export type HeadingProps = ComponentProps<'h1'> & {
  size: keyof typeof sizes
}

export const Heading = (props: HeadingProps) => {
  const { size, className, children, ...rest } = props
  const Element = size
  return (
    <Element className={cn(sizes[size], className)} {...rest}>
      {children}
    </Element>
  )
}
