import { Route, Routes } from 'react-router-dom'
import './App.css'
import NotFoundPage from './pages/NotFoundPage'
import RouterOutlet from './router/routerOutlet'
import Details from './pages/Details'

function App() {
  return (
    <div className="container-pages">
      <Routes>
        <Route path="/" element={<RouterOutlet />}>
          <Route path="details/:key" element={<Details />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  )
}
export default App
