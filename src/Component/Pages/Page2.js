import React, {Component} from 'react';
import {Link, Redirect} from "react-router-dom";

class Page2 extends Component {


    render() {

        // var para ="/page3/"+this.state.passData;

        if (sessionStorage.getItem("userName") == null){

            return <Redirect to="/login" />

        }else {
            return (
                <div>
                    <h1>Page 2</h1>
                    {/*<button><Link to="/page3">Pass My Name</Link></button>*/}
                </div>
            );

        }


    }
}

export default Page2;