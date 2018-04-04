import React, { Component } from 'react';
import Button from './Button';

class Buttonbox extends Component {
    render() {
        return (
            <div>
            <Button />
            <Button />
            <Button />    
            </div>        
        );
    }
}

export default Buttonbox;