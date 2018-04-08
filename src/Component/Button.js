import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
// constructor(props) {
//     super(props);
// }
    render() {
        return (
            <button className="Button">{this.props.searchTerm}</button>            
        );
    }
}

Button.propTypes = {
    searchTerm: PropTypes.string.isRequired
}

export default Button;