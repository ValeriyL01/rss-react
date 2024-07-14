import { Outlet } from 'react-router-dom'
import MainPage from '../pages/MainPage'

function RouterOutlet() {
  return (
    <>
      <MainPage />
      <Outlet />
    </>
  )
}

export default RouterOutlet
