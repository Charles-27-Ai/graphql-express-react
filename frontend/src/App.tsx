import React from 'react';
import 'bootswatch/dist/solar/bootstrap.min.css'
import logo from './assets/img/spacex-logo.png'
// /import logo from './logo.svg';
//import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <img src={logo} alt="SpaceX Logo" className="img-fluid" />
          <h1 className="text-center text-light">List of Launches</h1>

        </div>
        
      </header>
    </div>
  );
}

export default App;
