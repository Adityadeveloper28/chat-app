// AuthPage.js
import React, { useState } from "react";
import axios from "axios";

function AuthPage(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://chatapp-4773.onrender.com/authenticate", {
        username,
        password,
      });

      props.onAuth({ ...response.data, secret: password });
    } catch (error) {
      console.error("Error during authentication:", error.response?.data || error.message);
    }
  };

  return (
    <div className="background">
      <form onSubmit={onSubmit} className="form-card">
        <div className="form-title">Welcome 👋</div>

        <div className="form-subtitle">Set a username and password to get started</div>

        <div className="auth">
          <div className="auth-label">Username</div>
          <input
            className="auth-input"
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <div className="auth-label">Password</div>
          <input
            className="auth-input"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className="auth-button" type="submit">
            Enter
          </button>
        </div>
      </form>
    </div>
  );
}

export default AuthPage;
