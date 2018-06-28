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
          <h1 className="App-title">Project 1</h1>
        </header>

        <h2>Kae Ramirez: Project 1</h2>
        <p>StudentID: A00923169</p>
        
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