import React, { Component } from 'react';
import Photo from './Photo.js';

class PhotoContainer extends Component {
    render() {
        return (
            <div>
                <Photo />
                <Photo />
                <Photo />
                <Photo />            
            </div>            
        );
    }
}

export default PhotoContainer;