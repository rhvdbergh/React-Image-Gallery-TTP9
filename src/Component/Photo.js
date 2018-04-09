import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
    photoDescription: PropTypes.string
}

Photo.defaultProps = {
    photoDescription: 'No Title'
}

export default Photo;