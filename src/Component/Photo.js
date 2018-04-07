import React, { Component } from 'react';

class Photo extends Component {
    render() {
        return (
            <li className="PhotoLi">
                <img className="Photo" src='https://placeimg.com/320/240/any'/>  
            </li>         
        );
    }
}

export default Photo;