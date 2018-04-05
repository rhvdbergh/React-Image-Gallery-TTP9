import React, { Component } from 'react';
import Search from './Component/Search.js';
import ButtonContainer from './Component/ButtonContainer.js';
import Title from './Component/Title.js';
import PhotoContainer from './Component/PhotoContainer.js';
import ErrNoMatch from './Component/ErrNoMatch.js';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MainWindow}/>
          <Route component={ErrNoMatch}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

class MainWindow extends Component {
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
