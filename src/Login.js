import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
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

  




  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Welcome to CommunicationApp</h1>
      <form onSubmit={handleLogin}>
        <div style={{ marginBottom: "20px" }}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
};

export default Login;
