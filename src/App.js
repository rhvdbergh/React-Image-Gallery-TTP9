import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Search from './Component/Search.js';
import Navigation from './Component/Navigation.js';
import Title from './Component/Title.js';
import PhotoContainer from './Component/PhotoContainer.js';
import ErrNoMatch from './Component/ErrNoMatch.js';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './css/App.css';
import apiKey from './config.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {photos: [], title: 'Loading ...'};
    this.getPhotos = this.getPhotos.bind(this);
  }

getPhotos(searchTerm) {
  this.setState({title: searchTerm});
  fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searchTerm}&per_page=20&format=json&nojsoncallback=1`)
  .then(response => {
    return response.json();
  })
  .then(myJson => {
    let arr = myJson.photos.photo;
    this.setState({photos: arr});
  });
  }

  render() {
    return (
      <div className="App">
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/search/coffee"/>}/>
            <Route path="/search/:searchTerm" render={ (props) => 
                  <MainWindow
                    getPhotos={this.getPhotos} 
                    photos={this.state.photos}
                    title={this.state.title}
                    {...props}
                  />
              }   
            /> 
            <Route component={ErrNoMatch}/>
          </Switch>
        </div>
    );
  }
}

class MainWindow extends Component {  
constructor(props) {
  super(props);
  this.props.history.listen((location, action) => {
  })
}

  componentDidMount() {
    this.props.getPhotos(this.props.match.params.searchTerm);
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
    this.props.getPhotos(this.props.match.params.searchTerm);
    }
  }

  render() {
    return (
      <div>
        <Search getPhotos={this.props.getPhotos}/>
          <Navigation getPhotos={this.props.getPhotos}/>
        {this.props.photos.length? <Title title={this.props.title} /> : <Title title={`${this.props.title}: No results found`} noResults={true} />}
        <PhotoContainer photos={this.props.photos} />
      </div>
    );
  }
}

MainWindow.propTypes = {
  getPhotos: PropTypes.func.isRequired,
  photos: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired
}

export default App;
