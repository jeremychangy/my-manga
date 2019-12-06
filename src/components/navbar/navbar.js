import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import LoggedIn from './loggedin'
import LoggedOut from './loggedout'
import {Navbar as NavBar, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap'

const Navbar = (props) => {
    const { auth, profile } = props;
    const links = auth.uid ? <LoggedIn profile={profile} /> : <LoggedOut />
    return (
        <div>
            <NavBar color="light" light-expand="md">
                <NavbarBrand href="/">manga</NavbarBrand>
                <Nav>
                    {/* <NavItem>
                        <NavLink href="/m/0">Chapter</NavLink>
                    </NavItem> */}
                    { links }
                </Nav>
            </NavBar>
        </div>
        // <nav className="App-header">
        //     <div className="container">
        //         <Link to='/'>Home</Link>
        //         <Link to='/m/0'>Chapter</Link>
        //         { links }
        //     </div>
        // </nav> 
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