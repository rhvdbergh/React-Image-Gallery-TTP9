import React, { Component } from 'react';
import Search from './Component/Search.js';
import Buttonbox from './Component/Buttonbox.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Search />
        <Buttonbox />
      </div>
    );
  }
}

export default App;
