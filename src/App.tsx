import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'

import MainPage from './pages/MainPage'
import NotFoundPage from './pages/NotFoundPage'
import RouterOutlet from './router/routerOutlet'
import Details from './pages/Details'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RouterOutlet />}>
          <Route index element={<MainPage />} />
          <Route path="details/:key" element={<Details />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  )
}
export default App
