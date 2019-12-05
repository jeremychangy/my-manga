import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/navbar/navbar'
import Home from './components/home'
import Chapter from './components/chapter'
import Login from './components/auth/login'
import Signup from './components/auth/signup'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/chapter' component={Chapter} />
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
