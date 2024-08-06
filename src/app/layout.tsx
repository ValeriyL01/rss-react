'use client'

import { useState } from 'react'

import { Provider } from 'react-redux'

import themeContext from '../context/themeContext'
import { store } from '../store/store'

import '../styles/details.css'
import '../styles/mainPage.css'
import '../styles/index.css'

function RootLayout({ children }: { children: React.ReactNode }) {
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  return (
    <html lang="en">
      <Provider store={store}>
        <themeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
          <body>
            <div className={`container-pages ${isDarkTheme ? 'dark' : ''}`}>{children}</div>
          </body>
        </themeContext.Provider>
      </Provider>
    </html>
  )
}
export default RootLayout
