import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'

import NotFoundPage from './pages/NotFoundPage'
import RouterOutlet from './router/routerOutlet'
import Details from './pages/Details'

function App() {
  return (
    <Router>
      <div className="container-pages">
        <Routes>
          <Route path="/" element={<RouterOutlet />}>
            <Route path="details/:key" element={<Details />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </div>
    </Router>
  )
}
export default App
