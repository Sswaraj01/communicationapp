import React, { useEffect, useState } from 'react';
import { Outlet, Link, useNavigate } from "react-router-dom";
function Nav() {
  const navigate = useNavigate();
  const [loggedUser, setLoggedUser] = useState(null); // State to store logged user details

  useEffect(() => {
    // Retrieve logged user details from localStorage
    const user = localStorage.getItem("loggeduser");
    if (user) {
      setLoggedUser(JSON.parse(user)); // Parse JSON string to object
    }
  }, []); // Run

  console.log(loggedUser);
  const handleLogout = (e) => {
    e.preventDefault(); // Prevent default navigation behavior

    // Remove the logged user from localStorage
    localStorage.removeItem("loggeduser");

    // Redirect to the logout page to show the logout message
    navigate("/logout");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <div className='col '></div>
              <li className="nav-item">
                <Link className="nav-link" to="/groupChat">
                  Group Chat
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/userList">
                  Manage User
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/manageDoc">
                  Manage Documents
                </Link>
              </li>
              <li>
                <div style={{ display: "flex", alignItems: "center" }}>
                  {/* Right side logged user info */}
                  {loggedUser ? (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                      }}
                    >
                      <span>
                        Welcome,{loggedUser.email}({loggedUser.fullname})
                      </span>{" "}
                      {/* Adjust based on your user data */}
                      <Link
                        className="nav-link"
                        to="/logout"
                        onClick={handleLogout}
                      >
                        Logout
                      </Link>
                    </div>
                  ) : (
                    <Link to="/login">Login</Link> // Show login link if no user is logged in
                  )}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <Outlet />
      </div>
    </>
  );
}

export default Nav;
