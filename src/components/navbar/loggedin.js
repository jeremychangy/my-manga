import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../../store/actions/authActions'

const LoggedIn = (props) => {
    console.log(props.profile.username)
    return (
        <div className="right">
            <NavLink to='/login' onClick={props.logout}>Log Out</NavLink>
            <NavLink to='/'>{props.profile.username}</NavLink>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(null, mapDispatchToProps)(LoggedIn)