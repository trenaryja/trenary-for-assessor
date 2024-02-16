const prefersDark = matchMedia('(prefers-color-scheme: dark)').matches

let theme = localStorage.getItem('theme')
if (theme === null) theme = document.documentElement.getAttribute('data-theme')
if (theme === null) theme = prefersDark ? 'dark' : 'light'

document.documentElement.setAttribute('data-theme', theme)
localStorage.setItem('theme', theme)
if (theme === 'dark') document.documentElement.classList.add('dark')
