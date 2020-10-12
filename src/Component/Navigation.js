import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Navigation extends Component {
    render() {
        return (
            <div>

                <ul>

                    <li>

                        <Link to="/">Home</Link>
                        <Link to="/page1">Page 1</Link>
                        <Link to="/page2">Page 2</Link>
                        <Link to="/page3">Page 3</Link>

                    </li>

                </ul>
                
            </div>
        );
    }
}

export default Navigation;