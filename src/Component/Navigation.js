import React, {Component} from 'react';
import {Link, NavLink} from "react-router-dom";

class Navigation extends Component {
    render() {
        return (
            <div>

                <ul>

                    <li>

                        <NavLink exact activeStyle={{color:"green"}} to="/">Home</NavLink>
                        <NavLink exact activeStyle={{color:"green"}} to="/page1">Page 1</NavLink>
                        <NavLink exact activeStyle={{color:"green"}} to="/page2">Page 2</NavLink>
                        <NavLink exact activeStyle={{color:"green"}} to="/page3">Page 3</NavLink>

                    </li>

                </ul>
                
            </div>
        );
    }
}

export default Navigation;