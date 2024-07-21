import { createContext } from 'react'

interface ThemeContext {
  isDarkTheme: boolean
  setIsDarkTheme: React.Dispatch<React.SetStateAction<boolean>>
}

const themeContextInit: ThemeContext = {
  isDarkTheme: false,
  setIsDarkTheme: () => {},
}

const themeContext = createContext(themeContextInit)
export default themeContext
