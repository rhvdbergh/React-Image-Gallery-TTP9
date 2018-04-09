import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button className="Button" onClick={() => {console.log('clicked', this.props.searchTerm); this.props.getPhotos(this.props.searchTerm)}}>{this.props.searchTerm}</button>            
        );
    }
}

Button.propTypes = {
    searchTerm: PropTypes.string.isRequired,
    getPhotos: PropTypes.func.isRequired
}

export default Button;