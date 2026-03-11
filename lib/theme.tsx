'use client'

import { createContext, useContext, useState, useEffect } from 'react'

type Theme = 'dark' | 'light'
const ThemeContext = createContext<{ theme: Theme; toggle: () => void }>({ theme: 'dark', toggle: () => {} })

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark')

  useEffect(() => {
    // هم روی html هم روی body
    document.documentElement.setAttribute('data-theme', theme)
    document.body.setAttribute('data-theme', theme)
    document.documentElement.className = theme === 'dark' ? 'dark-mode' : 'light-mode'
  }, [theme])

  // اولین بار هم اعمال کن
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark')
    document.body.setAttribute('data-theme', 'dark')
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, toggle: () => setTheme(t => t === 'dark' ? 'light' : 'dark') }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
