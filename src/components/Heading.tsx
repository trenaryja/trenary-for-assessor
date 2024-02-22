import { cn, slugify } from '@/lib/utils'
import Link from 'next/link'
import { ComponentProps } from 'react'

const sizes = {
  h1: 'text-5xl sm:text-6xl md:text-7xl  font-extrabold',
  h2: 'text-3xl sm:text-4xl md:text-5xl  font-extrabold',
  h3: 'text-xl sm:text-2xl md:text-3xl  font-extrabold',
  h4: 'text-md sm:text-lg md:text-xl  font-extrabold',
  h5: 'text-base sm:text-lg  font-bold',
  h6: 'text-base font-bold',
}

export type HeadingProps = ComponentProps<'h1'> &
  Omit<ComponentProps<typeof Link>, 'href'> & {
    size: keyof typeof sizes
    clickable?: boolean
    href?: string
  }

export const Heading = ({ size, className, children, clickable, id, href, ...props }: HeadingProps) => {
  const Element = clickable ? Link : size
  const _id = id ?? typeof children === 'string' ? slugify(children as string) : undefined
  return (
    <Element
      id={_id}
      className={cn(
        sizes[size],
        {
          'cursor-pointer': clickable,
          'hover:underline': clickable,
        },
        className,
      )}
      href={href ?? `#${_id}`}
      {...props}
    >
      {children}
    </Element>
  )
}
