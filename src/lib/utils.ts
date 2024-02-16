import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))

export const links = [
  { id: 'meet-joe', label: 'Meet Joe' },
  { id: 'platform', label: 'Platform' },
  { id: 'contact', label: 'Contact' },
] as const

export type LinkId = (typeof links)[number]['id']

export const getLink = (id: (typeof links)[number]['id']) => links.find((link) => link.id === id)!

export const scrollTo = (id: LinkId) => {
  if (!id) return
  const element = document.getElementById(id)
  element?.scrollIntoView({ behavior: 'smooth' })
  window.addEventListener('scrollend', () => (window.location.hash = id), { once: true })
}
