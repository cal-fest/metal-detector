import React from 'react';
import './App.css';
import Nav from "./Nav";
import DisplayMain from './DisplayMain';

function App() {
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <DisplayMain />

      </header>
    </div>
  );
}

export default App;
