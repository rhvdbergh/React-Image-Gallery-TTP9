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
            let populatePhotos = () => this.props.photos.map((photo, index) => {
                return (
                    <Photo key={index} photoURL={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} />
                );
            });
        } else {
            let populatePhotos = (() => <h1>Loading...</h1>);
        }

    }



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