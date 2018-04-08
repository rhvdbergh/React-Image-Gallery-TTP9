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
  constructor(props) {
    super(props);
    this.state = {photos: []};
  }

componentWillMount() {
  this.setState({photos: this.getPhotos('Coffee')});
}

getPhotos(searchTerm) {
    console.log('button clicked');
    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searchTerm}&per_page=20&format=json&nojsoncallback=1`)
    .then(response => {
      return response.json();
    })
    .then(myJson => {
      console.log(myJson);
    });
  }

  render() {
    return (
      <BrowserRouter>
      <div className="App">
          <Search />
          <Navigation getPhotos={this.getPhotos}/>
          <Switch>
            <Route exact path="/" render={(props) => <MainWindow getPhotos={this.getPhotos}/>}/>
            <Route render={ErrNoMatch}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

class MainWindow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Title />
        <PhotoContainer />
      </div>
    );
  }
}

MainWindow.propTypes = {
  getPhotos: PropTypes.func.isRequired
}

export default App;
