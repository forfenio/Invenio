import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3>
            What type of user are You?
          </h3>
          <div className="buttons">
            <button>Barber shop</button>
            <button>Freelancer barber</button>
            <button>Customer</button>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
