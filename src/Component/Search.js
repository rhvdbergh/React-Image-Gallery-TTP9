import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';


class Search extends Component {
    constructor(props) {
        super(props);
        this.state={searchTerm: ''}
        // this.getPhotos = this.props.getPhotos;
    }

    updateSearchTerm(e) {
        this.setState({searchTerm: e.target.value});
        console.log('success');
    }

    updatePhotos(e) {
        e.preventDefault(); // to stop the page from loading and displaying the default photos
        this.props.history.push(`/search/${this.state.searchTerm}`); // we have access to history because of withRouter
        e.currentTarget.reset();        
    }

    render() {
        return (
            <form className='SearchContainer' onSubmit={this.updatePhotos.bind(this)}>
                <input className='Search' type="search" placeholder='Search ...' onChange={this.updateSearchTerm.bind(this)} />
                <button className='SearchButton'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" version="1.1" width="24px" height="24px">
                        <g id="surface1">
                        <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z "/>
                        </g>
                    </svg>
                </button>
            </form>
        )
    }
}

Search.propTypes = {
    getPhotos: PropTypes.func.isRequired
}

export default withRouter(Search);