import { useEffect, useState } from 'react'
import './ThemeToggle.css'

function getInitialTheme() {
  const saved = localStorage.getItem('theme')
  if (saved === 'light' || saved === 'dark') return saved
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

function ThemeToggle() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <button
      className="theme-toggle"
      onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
      aria-label="Toggle dark mode"
    >
      {theme === 'dark' ? (
        <svg viewBox="0 0 24 24" fill="currentColor" className="theme-toggle-icon">
          <path d="M12 4.5a1 1 0 0 1-1-1V2a1 1 0 1 1 2 0v1.5a1 1 0 0 1-1 1Zm0 19a1 1 0 0 1-1-1V21a1 1 0 1 1 2 0v1.5a1 1 0 0 1-1 1ZM4.22 5.64a1 1 0 0 1-1.42 0l-1.06-1.06a1 1 0 0 1 1.42-1.42l1.06 1.06a1 1 0 0 1 0 1.42Zm16.48 16.48a1 1 0 0 1-1.42 0l-1.06-1.06a1 1 0 0 1 1.42-1.42l1.06 1.06a1 1 0 0 1 0 1.42ZM2 13H.5a1 1 0 1 1 0-2H2a1 1 0 1 1 0 2Zm21.5 0H22a1 1 0 1 1 0-2h1.5a1 1 0 1 1 0 2ZM3.16 20.84a1 1 0 0 1 0-1.42l1.06-1.06a1 1 0 1 1 1.42 1.42l-1.06 1.06a1 1 0 0 1-1.42 0Zm16.48-16.48a1 1 0 0 1 0-1.42l1.06-1.06a1 1 0 1 1 1.42 1.42l-1.06 1.06a1 1 0 0 1-1.42 0ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Z" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="currentColor" className="theme-toggle-icon">
          <path d="M20.35 14.5a8.5 8.5 0 0 1-11.85-11.85A9.5 9.5 0 1 0 20.35 14.5Z" />
        </svg>
      )}
    </button>
  )
}

export default ThemeToggle
