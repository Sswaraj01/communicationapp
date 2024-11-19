import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const EditUser = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Destructure user data from location state
  const { user } = location.state;

  const [userData, setUserData] = useState({
    fullname: user.fullname,
    email: user.email,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // Get current users from localStorage
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Update the specific user
    users = users.map((u) =>
      u.id === user.id ? { ...u, fullname: userData.fullname, email: userData.email } : u
    );

    // Save the updated users list back to localStorage
    localStorage.setItem('users', JSON.stringify(users));

    // Redirect to user list
    navigate('/userList');
  };

  return (
    <div>
      <h2>Edit User</h2>
      <form className='form-group'>
        <label>
          Full Name:
          <input
            type="text"
            name="fullname"
            value={userData.fullname}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="button" className='btn btn-success' onClick={handleSave}>
          Save
        </button>
      </form>
    </div>
  );
};

export default EditUser;
