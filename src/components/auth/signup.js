import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signup } from '../../store/actions/authActions'

class Signup extends Component {
  state = {
    username: '',
    email: '',
    password: '',
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signup(this.state);
  }
  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to='/' />
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="App-header">Sign Up</h5>
          <div className="input-field">
            <label htmlFor="username">Username</label>
            <input type="text" id='username' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="text" id='email' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id='password' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="">Sign Up</button>
            <div className="center red-text">
              { authError ? <p>{authError}</p> : null }
            </div>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signup: (creds) => dispatch(signup(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)