import { useLocation } from "react-router-dom";
const LoginSuccessful = () => {
    const location = useLocation();
    const { user } = location.state || {};
  
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Welcome, {user?.fullname}</h1>
        <p>You have successfully logged in with email {user?.email} </p>
      </div>
    );
}

export default LoginSuccessful;