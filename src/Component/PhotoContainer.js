import React, { Component } from 'react';
import Photo from './Photo.js';

class PhotoContainer extends Component {
    render() {
        return (
            <div>
                <ul className="PhotoContainer">
                    <Photo />
                    <Photo />
                    <Photo />
                    <Photo />       
                </ul>     
            </div>            
        );
    }
}

export default PhotoContainer;