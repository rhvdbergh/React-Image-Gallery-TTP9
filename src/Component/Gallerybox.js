import React, { Component } from 'react';
import Photo from './Photo.js';

class Gallerybox extends Component {
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

export default Gallerybox;