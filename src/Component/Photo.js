import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Photo extends Component {
    render() {
        return (
            <li className="PhotoLi">
                <img className="Photo" src={this.props.photoURL}/>  
            </li>         
        );
    }
}

Photo.propTypes = {
    photoURL: PropTypes.string.isRequired
}

export default Photo;