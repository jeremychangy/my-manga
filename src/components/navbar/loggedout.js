import React from 'react'
import { NavLink } from 'react-router-dom'

const LoggedOut = () => {
  return (
    <div className="right">
      <NavLink to='/login'>Login</NavLink>
      <NavLink to='/signup'>Sign Up</NavLink>
    </div>
  )
}

export default LoggedOut