import React, { useState,useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const EditUser = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [loggedUser, setLoggedUser] = useState(null);
  // Destructure user data from location state
  const { user } = location.state;

  const [userData, setUserData] = useState({
    fullname: user.fullname,
    email: user.email,
  });

  useEffect(() => {
    // Retrieve logged user details from localStorage
    const loggedinuser = JSON.parse(localStorage.getItem("loggeduser"))
    setLoggedUser(loggedinuser);
    
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // Get current users from localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Update the specific user
    users = users.map((u) =>
      u.id === user.id
        ? { ...u, fullname: userData.fullname, email: userData.email }
        : u
    );

    if(user.email===loggedUser.email){
      
    }

    // Save the updated users list back to localStorage
    localStorage.setItem("users", JSON.stringify(users));

    // Redirect to user list
    navigate("/userList");
  };

  return (
    <div>
      <h2>Edit User</h2>
      <form>
        <div className="form-group">
          <label for="exampleInputPassword1">Full Name:</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            name="fullname"
            value={userData.fullname}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <button type="submit" className="btn btn-success" onClick={handleSave}>
          Save
        </button>
      </form>
    </div>
  );
};

export default EditUser;
