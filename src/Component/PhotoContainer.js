import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Photo from './Photo.js';

class PhotoContainer extends Component {
    // constructor(props) {
    //     super(props);
    //   }

    componentWillMount() {
        
        // populatePhotos = () => {console.log('the photos received', this.props.photos)}
      if (this.props.photos) {
            let populatePhotos = (() => this.props.photos.map((photo, index) => {
                
            }));
        } else {
            let populatePhotos = (() => <h1>Loading...</h1>);
        }

    }



    render() {
        return (
            <div>
                <ul className="PhotoContainer">
                    {this.populatePhotos}
                </ul>     
            </div>            
        );
    }
}

PhotoContainer.propTypes = {
    photos: PropTypes.array.isRequired
}

export default PhotoContainer;