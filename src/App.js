import React from 'react';
import logo from './logo.svg';
import './App.css';
import { disconnect } from 'cluster';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function x() {
  let username = "Godspeed";
  return (
    <div>
        <p>Hello, it's {{username}}</p>
    </div>
  );
}

export default App;
