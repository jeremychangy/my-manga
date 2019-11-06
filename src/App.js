import React, { Component } from 'react';
import './App.css';
import Chapter from './components/chapter.js'

class App extends Component {
  render () {
    return (
      <div className="App">
        <h1 className="App-header">Gintama chapter 175</h1>
        <Chapter />
      </div>
    );
  }
}

export default App;
