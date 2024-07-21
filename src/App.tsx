import { Route, Routes } from 'react-router-dom'
import './App.css'
import { useState } from 'react'
import NotFoundPage from './pages/NotFoundPage'
import RouterOutlet from './router/routerOutlet'
import Details from './pages/Details'
import themeContext from './themeContext'

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <themeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
      <div className={`container-pages ${isDarkTheme ? 'dark' : ''}`}>
        <Routes>
          <Route path="/" element={<RouterOutlet />}>
            <Route path="details/:key" element={<Details />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </div>
    </themeContext.Provider>
  )
}
export default App
