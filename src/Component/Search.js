import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
            <form>
                <input className='Search' type="search" placeholder='Search ...'/>
                <button className='SearchButton'>{'\u{1F50D}'}</button>
            </form>
        )
    }
}

export default Search;