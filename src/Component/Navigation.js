import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

class Navigation extends Component {
    render() {
        return (
            <div className="Navigation">
                <Button searchTerm="Coffee" getPhotos={this.props.getPhotos}/>
                <Button searchTerm="Tea" getPhotos={this.props.getPhotos}/>
                <Button searchTerm="Bread" getPhotos={this.props.getPhotos}/>    
            </div>        
        );
    }
}

Navigation.propTypes = {
    getPhotos: PropTypes.func.isRequired
}

export default Navigation;