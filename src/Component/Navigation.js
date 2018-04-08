import React, { Component } from 'react';
import Button from './Button';

class Navigation extends Component {
    render() {
        return (
            <div className="Navigation">
            <Button searchTerm="Coffee"/>
            <Button searchTerm="Tea"/>
            <Button searchTerm="Bread"/>    
            </div>        
        );
    }
}

export default Navigation;