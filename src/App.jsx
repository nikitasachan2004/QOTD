import React, { useEffect, useState } from 'react'
import QOTD from './pages/QOTD'

function App() {
  const getInitialTheme = () => {
    try {
      const saved = localStorage.getItem('theme')
      if (saved === 'dark' || saved === 'light') return saved

      const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      return systemDark ? 'dark' : 'light'
    } catch {
      return 'light'
    }
  }

  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    const root = document.documentElement

    // Always remove first to prevent stuck dark mode
    root.classList.remove('dark')

    if (theme === 'dark') {
      root.classList.add('dark')
    }

    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }

  return <QOTD toggleTheme={toggleTheme} />
}

export default App
