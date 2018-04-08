import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Search from './Component/Search.js';
import Navigation from './Component/Navigation.js';
import Title from './Component/Title.js';
import PhotoContainer from './Component/PhotoContainer.js';
import ErrNoMatch from './Component/ErrNoMatch.js';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';
import './css/App.css';
import apiKey from './config.js';

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
       <Navigation />
        <Title />
        <PhotoContainer />
      </div>
    );
  }
}

export default App;
