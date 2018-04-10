import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {Link} from 'react-router-dom';

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