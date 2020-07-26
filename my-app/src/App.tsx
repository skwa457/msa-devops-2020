import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          MSA DevOps
        </p>
        <a
          className="App-link"
          href="https://msa.azurewebsites.net"
          target="_blank"
          rel="noopener noreferrer"
        >
          MSA website
        </a>
      </header>
    </div>
  );
}

export default App;
