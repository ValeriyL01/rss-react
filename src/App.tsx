import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import NotFoundPage from './pages/notFoundPage/NotFoundPage'
import RouterOutlet from './router/routerOutlet'
import { Details } from './pages/details/Details'
import themeContext from './context/themeContext'

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  return (
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
