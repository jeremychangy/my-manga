import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import LoggedIn from './loggedin'
import LoggedOut from './loggedout'

const Navbar = (props) => {
    const { auth, profile } = props;
    const links = auth.uid ? <LoggedIn profile={profile} /> : <LoggedOut />
    return (
        <nav className="App-header">
            <div className="container">
                <Link to='/'>Home</Link>
                <Link to='/chapter'>Chapter</Link>
                { links }
            </div>
        </nav> 
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar)