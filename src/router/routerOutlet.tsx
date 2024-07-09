import { Outlet } from 'react-router-dom'

function RouterOutlet() {
  return (
    <>
      <h1>Search Star Wars characters</h1>
      <Outlet />
    </>
  )
}

export default RouterOutlet
