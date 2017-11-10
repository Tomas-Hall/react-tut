import React, { Component } from 'react';
import logo from './seal.jpg';
import './App.css';
import Test from './scripts/test.js';
import OptionsBox from './scripts/options.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Seal.mp4</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>  
        <OptionsBox />
        <Test />
      </div>
      
    );
  }
}

export default App;
