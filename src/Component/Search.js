import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
            <form>
            <input className='Search' placeholder='Search ...'/>
             <button className='SearchButton'></button>
             </form>
        )
    }
}

export default Search;