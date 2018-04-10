import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {Link} from 'react-router-dom';

// navigation bar consisting of three buttons with search terms
// the buttons <Link>s to urls that will make the app update 
// and retrieve the search term
class Navigation extends Component {
    render() {
        return (
            <div className="Navigation">
                <ul className="Navigation">
                    <li className="NavButton"><Link to="/search/coffee">Coffee</Link></li>
                    <li className="NavButton"><Link to="/search/tea">Tea</Link></li>
                    <li className="NavButton"><Link to="/search/bread">Bread</Link></li>
                </ul>
            </div>        
        );
    }
}

export default withRouter(Navigation);