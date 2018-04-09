import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Title extends Component {
    render() {
        return (
            <h1>{this.props.title}</h1>            
        );
    }
}

Title.propTypes = {
    title: PropTypes.string.isRequired
}

export default Title;