import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Photo extends Component {
    render() {
        return (
            <li className="PhotoLi">
                <img className="Photo" src='https://placeimg.com/320/240/any'/>  
            </li>         
        );
    }
}

Photo.propTypes = {
    photoURL: PropTypes.string.isRequired
}

export default Photo;