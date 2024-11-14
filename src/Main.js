import React from 'react';
import Welcome from './Welcome';
import Login from './Login';
import Register from './Register';
import LoginSuccessful from './LoginSuccessful';
import RegisterSuccessful from './RegisterSuccessful';
import ChatList from './ChatList';
import UserList from './UserList';
import EditUser from './EditUser';
import DocumentList from './DocumentList';
import Logout from './Logout';

export default class Main extends React.Component { // Exporting a component
    render() { // lifecycle
        return <div>
            <h1>Main Class Component </h1>
            <Welcome />
        </div>
    }
}