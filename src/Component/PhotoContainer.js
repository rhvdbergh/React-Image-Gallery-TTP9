import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Photo from './Photo.js';

class PhotoContainer extends Component {
    // constructor(props) {
    //     super(props);
    //   }

    populatePhotos = this.props.photos.map((photo, index) => {
        return <Photo key={index} photoURL={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} />
    });

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