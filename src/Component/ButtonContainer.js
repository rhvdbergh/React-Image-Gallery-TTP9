import React, { Component } from 'react';
import Button from './Button';

class ButtonContainer extends Component {
    render() {
        return (
            <div className="ButtonContainer">
            <Button />
            <Button />
            <Button />    
            </div>        
        );
    }
}

export default ButtonContainer;