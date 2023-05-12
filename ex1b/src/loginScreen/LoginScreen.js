import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./LoginScreen.css";

function LoginScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isFormValid()) {
      setFormError("Please enter a valid username and password.");
    } else {
      setFormError("");
      // Submit the form
    }
  };

  const isFormValid = () => {
    return (
      username.trim() !== "" &&
      password.trim() !== "" &&
      document.querySelector("#username").checkValidity() &&
      document.querySelector("#password").checkValidity()
    );
  };

  return (
    <div className="LoginScreen">
      <br />
      <p id="logintitle">Log in</p> <br />
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="username"></label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Type your user name:"
            required
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <br />
        <div className="form-field">
          <label htmlFor="password"></label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter password:"
            required
            pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        {formError && <p className="error-message">{formError}</p>}
        <br />
        <br />
        <button id="buttonlogin" type="submit" disabled={!isFormValid()}>
          Login
        </button>{" "}
        <br />
        <p>
          Not registered? <Link to="/register">Click here</Link> to register
        </p>
      </form>
    </div>
  );
}

export default LoginScreen;
