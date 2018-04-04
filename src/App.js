import React, { Component } from 'react';
import Search from './Component/Search.js';
import ButtonContainer from './Component/ButtonContainer.js';
import Title from './Component/Title.js';
import PhotoContainer from './Component/PhotoContainer.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Search />
        <ButtonContainer />
        <Title />
        <PhotoContainer />
      </div>
    );
  }
}

export default App;
