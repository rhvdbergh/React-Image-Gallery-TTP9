import React, { Component } from 'react';
import Button from './Button';

class Navigation extends Component {
    render() {
        return (
            <div className="Navigation">
            <Button />
            <Button />
            <Button />    
            </div>        
        );
    }
}

export default Navigation;