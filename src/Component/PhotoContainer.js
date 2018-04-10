import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Photo from './Photo.js';

// Main div with ul containing the photos
class PhotoContainer extends Component {
    render() {
        let populatePhotos = this.props.photos.map((photo, index) => { //update photo urls to latest fetch
            return <Photo 
                        key={index} 
                        // m(edium) size photos best fit the size of the css styling for the app
                        photoURL={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`} 
                        
                        photoDescripton={photo.title} // for use in the alt property in the photo, retrieved from Flickr
                    />
        });

        return (
            <div>
                <ul className="PhotoContainer">
                    {/* build a list of photos through populatePhotos */}
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