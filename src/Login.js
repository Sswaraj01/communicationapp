import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loggeduser,setLoggedUser] = useState([]);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Fetch user details from localStorage
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    
    // Check if user exists
    const user = storedUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      // Clear error and navigate to LoginSuccess
      
      setError("");
      navigate("/loginsuccess", { state: { user } });
    } else {
      // Set error message
      setError("Invalid email or password.");
    }
  };

  

/*
    JSON.stringify - convert object into string
    JSON.parse - convert string into object
*/
let loggedinuser = localStorage.getItem("loggeduser") ? JSON.parse(localStorage.getItem("loggeduser")) : []; // ternary operator
loggeduser.push(loggedInuser); // adding item inside array
localStorage.setItem("loggeduser", JSON.stringify(loggedinuser));


  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div style={{ marginBottom: "10px" }}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
