import { Route, Routes } from 'react-router-dom'

import NotFoundPage from './pages/notFoundPage/NotFoundPage'

import { MainPage } from './pages/mainPage/MainPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
export default App
