import { FlatCompat } from '@eslint/eslintrc'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
	baseDirectory: __dirname,
})

/** @type {import('eslint').Linter.Config[]} */
export default [
	...compat.extends('next/core-web-vitals', 'next/typescript'),
	{
		rules: {
			'react/no-unescaped-entities': 'off',
		},
	},
]
