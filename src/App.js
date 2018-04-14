import React, { Component } from 'react';
import MainWindow from './Component/MainWindow.js';
import ErrNoMatch from './Component/ErrNoMatch.js';
import { Route, Switch, Redirect } from 'react-router-dom';
import './css/App.css';
import apiKey from './config.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {photos: [], title: 'Loading ...', loading: true, noResults: false};
    this.getPhotos = this.getPhotos.bind(this);
  }

getPhotos(searchTerm) {
  this.setState({title: searchTerm, loading: true, noResults: false});
  fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searchTerm}&per_page=20&format=json&nojsoncallback=1`)
  .then(response => {
    return response.json();
  })
  .then(myJson => {
    let arr = myJson.photos.photo;
    if (arr.length === 0) {
      this.setState({photos: arr, loading: false, noResults: true});
    } else {
      this.setState({photos: arr, loading: false, noResults: false});
    } 
  });
  }

  render() {
    return (
      <div className="App">
          <Switch>
            <Route exact path="./" render={() => <Redirect to="./search/coffee"/>}/>
            <Route path="./search/:searchTerm" render={ (props) => 
                  <MainWindow
                    getPhotos={this.getPhotos} 
                    photos={this.state.photos}
                    title={this.state.title}
                    loading={this.state.loading}
                    noResults={this.state.noResults}
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


export default App;
