import React from "react";
import Welcome from "./Welcome";
import Logout from "./Logout";
import UserList from "./UserList";
import NotFound from "./NotFound";
import ManageDoc from "./ManageDoc";
import GroupChat from "./GroupChat";
import Login from "./Login";
import Nav from "./Nav";
import EditUser from "./EditUser"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Register";
import LoginSuccessful from "./LoginSuccessful";
import RegisterSuccessful from "./RegisterSuccessful";

export default class Main extends React.Component {
  // Exporting a component
  render() {
    // lifecycle
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Nav />}>
              
              <Route path="/groupChat" element={<GroupChat />}></Route>
              <Route path="/userList" element={<UserList />}></Route>
              <Route path="/manageDoc" element={<ManageDoc />}></Route>
              <Route path="/logout" element={<Logout />}></Route>
              <Route path="*" element={<NotFound />}></Route>
              <Route path="/edituser" element={<EditUser />}></Route>
              <Route path="/loginsuccess" element={<LoginSuccessful />}></Route>
              <Route path="/registersuccess" element={<RegisterSuccessful />}></Route>
            </Route>
            <Route index element={<Welcome />}></Route>
            <Route path="/home" element={<Welcome />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}
