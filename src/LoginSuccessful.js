import { useLocation } from "react-router-dom";
const LoginSuccessful = () => {
    const location = useLocation();
    const { user } = location.state || {};
    let loggeduser = {
      id: Number(new Date()),
      fullname: user?.fullname,
      email: user?.email
  }

   let userslist = localStorage.getItem("loggeduser") ? JSON.parse(localStorage.getItem("loggeduser")) : []; // ternary operator
   userslist.push(loggeduser); // adding item inside array
   localStorage.setItem("loggeduser", JSON.stringify(loggeduser));
  
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Welcome, {user?.fullname}</h1>
        <p>You have successfully logged in with email {user?.email} </p>
      </div>
    );
}

export default LoginSuccessful;