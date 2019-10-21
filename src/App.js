import React from 'react';
import logo from './logo.svg';
import './App.css';
import Page from './Page';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> Crud em ReactJS </p>
        <Page />
      </header>
    </div>
  );
}

export default App;
