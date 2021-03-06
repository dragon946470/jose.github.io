import React from 'react';
import logo from './images/Jose.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        My name is Jose Patrone and I'm going to master React!
        </p>
        <a
          className="App-link"
          href="https://github.com/dragon946470/jose.github.io.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check Me Out!
        </a>
      </header>
    </div>
  );
}

export default App;
