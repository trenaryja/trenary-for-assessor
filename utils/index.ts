import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))

export const links = [
	{ id: 'meet-joe', label: 'Meet Joe' },
	{ id: 'platform', label: 'Platform' },
	{ id: 'contact', label: 'Contact' },
] as const

export type LinkId = (typeof links)[number]['id']

export const ELECTION_DATE = new Date('2024-05-14T00:00:00.000-05:00')

export const slugify = (input: string) =>
	input
		.toLowerCase()
		.replace(/\s+/g, '-')
		.replace(/[^a-z0-9-]/g, '')
		.replace(/-+/g, '-')
		.trim()
