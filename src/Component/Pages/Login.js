import React, {Component} from 'react';

class Login extends Component {

    constructor(props) {
        super(props);

    }

    login=()=>{

        sessionStorage.setItem("userName", "Yamin")
    }

    logout=()=>{

        sessionStorage.clear()
    }


    render() {
        return (
            <div>

                <button onClick={this.login}>Login</button>
                <button onClick={this.logout}>Log Out</button>

            </div>
        );
    }
}

export default Login;