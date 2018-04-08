import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Photo from './Photo.js';

class PhotoContainer extends Component {
    // constructor(props) {
    //     super(props);
    //   }

    populatePhotos = this.props.photos.map((photo, index) => {
        return <Photo key={index} photoURL={`https://farm${this.props.photos[0].farm}.staticflickr.com/${this.props.photos[0].server}/${this.props.photos[0].id}_${this.props.photos[0].secret}.jpg`} />
    });

    render() {
        return (
            <div>
                <ul className="PhotoContainer">
                    {this.populatePhotos}
                    {/* <Photo key="1" photoURL={`https://farm${this.props.photos[0].farm}.staticflickr.com/${this.props.photos[0].server}/${this.props.photos[0].id}_${this.props.photos[0].secret}.jpg`} /> */}
                </ul>     
            </div>            
        );
    }
}

PhotoContainer.propTypes = {
    photos: PropTypes.array.isRequired
}

export default PhotoContainer;