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
    this.getPhotos = this.getPhotos.bind(this);
  }

componentWillMount() {
  this.setState({photos: this.getPhotos('bread')});
}

getPhotos(searchTerm) {
    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searchTerm}&per_page=20&format=json&nojsoncallback=1`)
    .then(response => {
      return response.json();
    })
    .then(myJson => {
      console.log('made it this far!');
      let arr = myJson.photos.photo;
      console.log(arr);
      this.setState({photos: arr});
    });
  }

  render() {
    return (
      <BrowserRouter>
      <div className="App">
          <Search />
          <Navigation getPhotos={this.getPhotos}/>
          <Switch>
            <Route exact path="/" 
              render={this.state.photos? (props) => 
                  <MainWindow 
                    getPhotos={this.getPhotos}
                    photos={this.state.photos} 
                  />
                  :
                  () => <h1>Loading ...</h1>
                 
              }   
            /> 
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
        <PhotoContainer photos={this.props.photos} />
      </div>
    );
  }
}

MainWindow.propTypes = {
  getPhotos: PropTypes.func.isRequired,
  photos: PropTypes.array.isRequired
}

export default App;
