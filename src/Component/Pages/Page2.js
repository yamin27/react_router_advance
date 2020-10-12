import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Page2 extends Component {

    constructor(props) {
        super(props);

        this.state={

            passData: "Yamin Alam"
        }
    }


    render() {

        var para ="/page3/"+this.state.passData;

        return (
            <div>
                <h1>Page 2</h1>
                <button><Link to={para}>Pass My Name</Link></button>
            </div>
        );
    }
}

export default Page2;