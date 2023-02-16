import './App.css';
import Emicalculator from './Emicalculator';
import React from 'react';
import Header from './Header';
import Home from './assets/Home';

function App() {
  return (
  <div className="App">
  <Header/>
  <Emicalculator/>
  <Home/>
  </div>
  );
}

export default App;
