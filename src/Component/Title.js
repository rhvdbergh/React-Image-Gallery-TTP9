import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Title extends Component {
    render() {
        return ( <div>
                    <h1>{this.props.title}</h1> 
                    {this.props.noResults? <h2>Your search did not return any results. Please try again.</h2> : <h2 />}
            </div>
        );
    }
}

Title.propTypes = {
    title: PropTypes.string.isRequired,
    noResults: PropTypes.bool
}

export default Title;