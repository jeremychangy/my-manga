import React from 'react'
import { NavLink } from 'react-router-dom'
import { NavItem } from 'reactstrap'

const LoggedOut = () => {
  return (
    <React.Fragment>
      <NavItem>
      <NavLink to='/login'>Login</NavLink>
      </NavItem>
      
      <NavItem>
        <NavLink to='/signup'>Sign Up</NavLink>
      </NavItem>
    </React.Fragment>
    
  )
}

export default LoggedOut