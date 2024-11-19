import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserList = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    // Call GET API and update state
    let localUsers = JSON.parse(localStorage.getItem("users"));
    setUsers(localUsers);
  }, []);

  const navigate = useNavigate();

  const goToEditUser = (user) => {
    navigate("/edituser",{ state: { user } });
  };

  

  return (
    <div className="table-responsive">
      <>
        <h1>Manage Users</h1>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((item, index) => (
              <tr key={index}>
                <td>{item.fullname}</td>
                <td>{item.email}</td>
                <td>
                  <span>
                    <button type="button" class="btn btn-primary" onClick={() => goToEditUser(item)} >
                      Edit
                    </button>
                  </span>
                  <span> | </span>
                  <span>
                    <button type="button" class="btn btn-danger">
                      Delete
                    </button>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    </div>
  );
};

export default UserList;
