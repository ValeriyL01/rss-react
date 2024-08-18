import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <div className="header">
      <NavLink to="/form">
        <button>form</button>
      </NavLink>
      <NavLink to="/react-form">
        <button>react hook form</button>
      </NavLink>
    </div>
  )
}
