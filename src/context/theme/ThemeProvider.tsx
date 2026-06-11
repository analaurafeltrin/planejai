import { useState, useEffect, type PropsWithChildren } from 'react'

import { type Theme, ThemeContext } from './ThemeContext'

export function ThemeProvider({ children }: PropsWithChildren) {
  const [theme, setTheme] = useState<Theme>(() => {
    const localStorageTheme = localStorage.getItem('theme') as Theme | null

    if (localStorageTheme) {
      return localStorageTheme
    }

    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    return systemPrefersDark ? 'dark' : 'light'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'))
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

/*
 * ThemeProvider
 
 * Provedor de tema (light/dark) para a aplicação.
 
 * - Inicializa o tema lendo o localStorage; se ausente, usa a preferência do sistema
 * - useEffect: sincroniza o tema no atributo data-theme do <html> e no localStorage
 * - toggleTheme: alterna entre 'light' e 'dark'
 * - Expõe { theme, toggleTheme } via ThemeContext.Provider
 */
