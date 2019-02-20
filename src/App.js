import React, { Component } from 'react';
import './App.css';
import Routing from './Routing';
import Header from './header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header/>
          <Routing/>
        </header>
      </div>
    );
  }
}

export default App;
