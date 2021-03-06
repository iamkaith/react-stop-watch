import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import StopWatch from './StopWatch.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">StopWatch</h1>
        </header>        
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-6 ">
              <StopWatch />
            </div>           
          </div>
        </div>
      </div>
    );
  }
}

export default App;