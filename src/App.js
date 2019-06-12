import React from 'react';
import Prism from "prismjs"
import logo from './logo.svg';
import './App.css';
import './prism.css'

function App() {
  var test = "HELLO WORLD!!!";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <pre><code className="language-css">{test}</code></pre>
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

export default App;
