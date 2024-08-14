import { Route, Routes } from 'react-router-dom'

import NotFoundPage from './pages/notFoundPage/NotFoundPage'

import { MainPage } from './pages/mainPage/MainPage'
import { FormPage } from './pages/formPage/formPage'
import { ReactHookFormPage } from './pages/reactHookFormPage/reactHookFormPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="form" element={<FormPage />} />
      <Route path="react-form" element={<ReactHookFormPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
export default App
