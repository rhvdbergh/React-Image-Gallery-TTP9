import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Search from './Search.js';
import Navigation from './Navigation.js';
import Title from './Title.js';
import PhotoContainer from './PhotoContainer.js';

// main page
class MainWindow extends Component {  
    constructor(props) {
      super(props);
    }

      // get data from Flickr
      componentDidMount() {
        this.props.getPhotos(this.props.match.params.searchTerm);
      }
    
      // make sure that the location did not change without
      // rendering again
      componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
        this.props.getPhotos(this.props.match.params.searchTerm);
        }
      }
    
      render() {
        return (
          <div>
            <Search />
              <Navigation />
              {/* display loading message if the page has not updated yet */}
              {this.props.loading? <h1>Loading ...</h1> : <Title title={this.props.title} />}
              {/* If the search returned no results, inform the user */}
              {this.props.noResults? <h2>Your search did not return any results. Please try again.</h2> : <h2> </h2>}
            <PhotoContainer photos={this.props.photos} />
          </div>
        );
      }
    }
    
    MainWindow.propTypes = {
      getPhotos: PropTypes.func.isRequired,
      photos: PropTypes.array.isRequired,
      title: PropTypes.string.isRequired,
      loading: PropTypes.bool.isRequired
    }

export default MainWindow;