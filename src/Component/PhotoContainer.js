import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Photo from './Photo.js';

class PhotoContainer extends Component {
    render() {
        let populatePhotos = this.props.photos.map((photo, index) => { //update photo urls to latest fetch
            return <Photo 
                        key={index} 
                        photoURL={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`} 
                        
                        photoDescripton={photo.title} // for use in the alt property in the photo
                    />
        });

        return (
            <div>
                <ul className="PhotoContainer">
                    {populatePhotos}
                </ul>     
            </div>            
        );
    }
}

PhotoContainer.propTypes = {
    photos: PropTypes.array.isRequired
}

export default PhotoContainer;