import React from "react";
import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();

  const gotToLogin = () => {
    navigate("/login");
  };

  const gotToRegister = () => {
    navigate("/register");
  };
  return (
    <>
      <div className="row max-auto">
        <div className="col-xxl-4"></div>
        <div className="col-xxl-4 p-3">
          <h1>Welcome to User Modules</h1>
          <h2> Existing Users</h2>
          <button className="btn btn-primary" onClick={gotToLogin}>
            Login
          </button>
          <h2>New Users</h2>
          <button className="btn btn-primary" onClick={gotToRegister}>
            Register
          </button>
        </div>
        <div className="col-xxl-4"></div>
      </div>
    </>
  );
}

export default Welcome;
