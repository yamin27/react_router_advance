import React, {Component} from 'react';
import {Route} from 'react-router-dom'
import Home from "./Pages/Home";
import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";
import Page3 from "./Pages/Page3";

class MyRoute extends Component {
    render() {
        return (
            <div>

                <Route exact path="/" component={Home}/>
                <Route exact path="/page1" component={Page1}/>
                <Route exact path="/page2" component={Page2}/>
                <Route exact path="/page3" component={Page3}/>

            </div>
        );
    }
}

export default MyRoute;