import { useState } from 'react'
import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import themeContext from '../context/themeContext'
import { store } from '../store/store'
import { ErrorBoundary } from '../components/errorBoundary/ErrorBoundary'
import '../styles/details.css'
import '../styles/mainPage.css'
import '../styles/index.css'

function MyApp({ Component, pageProps }: AppProps) {
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  return (
    <ErrorBoundary>
      <Provider store={store}>
        <themeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
          <div className={`container-pages ${isDarkTheme ? 'dark' : ''}`}>
            <Component {...pageProps} />
          </div>
        </themeContext.Provider>
      </Provider>
    </ErrorBoundary>
  )
}
export default MyApp
