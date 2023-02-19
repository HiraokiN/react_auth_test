import React from 'react';
import logo from './logo.svg';
import './App.css';
import Router  from "./router"
import { setAuthToken } from './helpers/setAuthToken'

function App() {

  const token = localStorage.getItem("token");
  if (token) {
    setAuthToken(token);
  }
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
