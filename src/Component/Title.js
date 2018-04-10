import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Title to be displayed on top of photos
// This should be the last search term
// capitalized by css
class Title extends Component {
    render() {
        return ( <div>
                    <h1>{this.props.title}</h1> 
            </div>
        );
    }
}

Title.propTypes = {
    title: PropTypes.string.isRequired
}

export default Title;