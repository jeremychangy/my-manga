import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../../store/actions/authActions'
import { Nav, NavItem } from 'reactstrap'

const LoggedIn = (props) => {
    const { username } = props.profile
    return (
        <Nav>
            <NavItem>
                <NavLink to={`/u/${username}`} >{props.profile.username}</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to='/login' onClick={props.logout}>Log Out</NavLink>
            </NavItem>
        </Nav>
        
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(null, mapDispatchToProps)(LoggedIn)