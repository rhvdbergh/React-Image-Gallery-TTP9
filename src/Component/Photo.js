import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-responsive-modal';

// photos, nested in <li> tags
class Photo extends Component {
    constructor(props) {
        super(props);
        this.state={open: false};
    }

    onOpenModal = () => {
        this.setState({open: true});
    }

    onCloseModal = () => {
        this.setState({open: false});
    }

    render() {
        const largePhoto = this.props.photoURL.replace('_m', '_c');
        return (
            <li className="PhotoLi">
                <img className="Photo" src={this.props.photoURL} alt={this.props.photoDescription} onClick={this.onOpenModal}/>  
                <Modal open={this.state.open} onClose={this.onCloseModal} little showCloseIcon={false}>
                    <img src={largePhoto} alt={this.props.photoDescription}/>  
                </Modal> 
            </li>         
        );
    }
}

Photo.propTypes = {
    photoURL: PropTypes.string.isRequired,
    photoDescription: PropTypes.string // functions as alt property, description retrieved from Flickr
}

Photo.defaultProps = {
    photoDescription: 'No Title'
}

export default Photo;