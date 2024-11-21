import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loggedUser, setLoggedUser] = useState(null); // State to store logged user details

  useEffect(() => {
    // Retrieve logged user details from localStorage
    const user = localStorage.getItem("loggeduser");
    if (user) {
      try {
        const parsedUser = JSON.parse(user);
        setLoggedUser(parsedUser.email);
      } catch (error) {
        console.error("Error parsing loggedUser:", error);
      }// Parse JSON string to object
    }
  }, []); // Run
  useEffect(() => {
    // Call GET API and update state
    let localUsers = JSON.parse(localStorage.getItem("users"));
    setUsers(localUsers);
  }, []);

  const navigate = useNavigate();

  const goToEditUser = (user) => {
    navigate("/edituser", { state: { user } });
  };

  const checkLoggedUser = (user) => {
    console.log(user);
    console.log(loggedUser);
    if(loggedUser===user.email){
      return true;
    }else{
      return false;
    }
  };

  const handleDeleteClick = (user) => {
    setSelectedUser(user);
    setShowModal(true); // Open the confirmation modal
  };

  const handleCancelDelete = () => {
    setShowModal(false);
    setSelectedUser(null);
  };

  const handleConfirmDelete = () => {
    const updatedUsers = users.filter((u) => u.id !== selectedUser.id);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setUsers(updatedUsers);
    setShowModal(false);
    setSelectedUser(null);
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
                {checkLoggedUser(item)? (
                    <>
                    <span>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => goToEditUser(item)}
                      disabled
                    >
                      Edit
                    </button> 
                  </span>
                  <span> | </span>
                  <span>
                    <button
                      type="button"
                      className="btn btn-danger"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      disabled
                    >
                      Delete
                    </button>
                  </span></>
                  ) : (
                    <>
                    <span>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => goToEditUser(item)}
                    >
                      Edit
                    </button>
                  </span>
                  <span> | </span>
                  <span>
                    <button
                      type="button"
                      className="btn btn-danger"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      onClick={() => handleDeleteClick(item)}
                    >
                      Delete
                    </button>
                  </span></> // Show login link if no user is logged in
                  )}
                 
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Confirm User Deletion
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">Are you Sure?</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                  onClick={handleConfirmDelete}
                >
                  OK
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={handleCancelDelete}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default UserList;
