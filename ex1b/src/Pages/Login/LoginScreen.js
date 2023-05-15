import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import "./LoginScreen.css";
import users from "../Register/users";


function LoginScreen({ registrationDataRef, setLoginData }) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState("");
  const [data, setData] = useState(localStorage.getItem('myData') || '');



  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    console.log(users);
    const user = users.find(user => user.username === username);

    if (user && user.password === password) {
      setFormError("");
      setLoginData({ username: user.username });
      localStorage.setItem('currentUser', JSON.stringify(user));
      navigate("/chat");
    }
    else {
      setFormError("Invalid username or password");
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
      <h1 id="logintitle">Login</h1>
      <form onSubmit={handleLogin} className="form">
        <div className="form-field">
          <label htmlFor="username"></label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Type your user name"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label htmlFor="password"></label>
          <input
            type="password"
            id="password"
            name="password"
            min={8}
            placeholder="Enter password"
            required
            pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button id="buttonlogin" type="submit" disabled={!isFormValid()}>
          Login
        </button>{" "}
        <span>
          Not registered? <Link to="/register">Click here</Link> to register
        </span>
      </form>
      {formError && <span className='errorMessage'>{formError}</span>}
    </div>
  );
}

export default LoginScreen;