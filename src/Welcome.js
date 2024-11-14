import React from "react";
class Welcome extends React.Component {
    render() {
        return (<div><h1>Welcome to Users Module</h1>
            <h2> Existing Users</h2>
            <button>Login</button> 
            <h2>New Users</h2>
            <button>Register</button>
            </div>
        );
    }
}

export default Welcome;