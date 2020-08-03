import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hi there!</p>
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

// docker run -it -p 3000:3000 CONTAINER_ID
// docker run -it -p 3000:3000 -v $(pwd):/app CONTAINER_ID
// docker run -it -p 3000:3000 -v /app/node_modules -v $(pwd):/app CONTAINER_ID

// docker run -it -p 3000:3000 fce8c8704226
// docker run -it -p 3000:3000 -v $(pwd):/app fce8c8704226
// docker run -it -p 3000:3000 -v $(pwd):/app fce8c8704226
// docker run -it -p 3000:3000 -v /app/node_modules -v $(pwd):/app fce8c8704226
