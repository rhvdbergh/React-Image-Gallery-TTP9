import React, { Component } from 'react';
import PropTypes from 'prop-types';

// photos, nested in <li> tags
class Photo extends Component {
    render() {
        return (
            <li className="PhotoLi">
                <img className="Photo" src={this.props.photoURL} alt={this.props.photoDescription}/>  
            </li>         
        );
    }
}

Photo.propTypes = {
    photoURL: PropTypes.string.isRequired,
    photoDescription: PropTypes.string // functions as alt property, description retrieved from Flickr
}

Photo.defaultProps = {
    photoDescription: 'No Title'
}

export default Photo;