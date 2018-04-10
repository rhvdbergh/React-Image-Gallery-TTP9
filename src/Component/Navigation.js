import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Button from './Button';

class Navigation extends Component {
    render() {
        return (
            <div className="Navigation">
                <ul>
                    <li><Link to="/search/coffee">Coffee</Link></li>
                    <li><Link to="/search/tea">Tea</Link></li>
                    <li><Link to="/search/bread">Bread</Link></li>
                </ul>
            </div>        
        );
    }
}

Navigation.propTypes = {
    getPhotos: PropTypes.func.isRequired
}

export default withRouter(Navigation);