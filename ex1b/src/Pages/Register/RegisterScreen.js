import './RegisterScreen.css';
import { useState } from "react";
import myImage from '../../image/minions.webp';
import { useNavigate, Link } from "react-router-dom";

const RegisterScreen = ({ registrationDataRef }) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [formError, setFormError] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [selctedImage, setSelctedImage] = useState(myImage);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setFormError("Passwords do not match");
      return;
    }
    if (username.trim() === displayName.trim()) {
      setFormError("Username and display name cannot be the same.");
      return;
    }
    if (!validatePassword(password)) {
      setFormError("Password must contain at least 8 characters, including at least one letter and one digit.");
      return;
    }

    setFormError("");
    // localStorage.setItem('registrationData', JSON.stringify({ username, password, displayName, selctedImage }));
    registrationDataRef.current = { username, password, displayName, selctedImage };
    console.log(registrationDataRef.current)

    navigate("/login");
  };
  const isFormFilled = () => {
    return username && password && confirmPassword && displayName;
  }

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => setSelctedImage(reader.result);

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(password);
  };

  return (
    <div className="RegisterScreen">
      <h1 className='title'> Register</h1>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="username"></label>
        <input
          type="text"
          id="username"
          className='userName'
          name="username"
          placeholder="Type your user name"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <div className="form-field">
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
        <div className="form-field">
          <label htmlFor="confirm-password"></label>
          <input
            type="password"
            min={8}
            id="confirm-password"
            name="confirm-password"
            placeholder="Enter password again"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <div className="form-field">
          <label htmlFor="display-name"></label>
          <input
            type="text"
            id="display-name"
            name="display-name"
            placeholder="Enter display name"
            required
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </div>
        <div className="upload-box">
          <span className="box">
            <label htmlFor="file-upload">Picture:</label>
            <img src={selctedImage} className="image-preview"></img>
          </span>
          <input
            required
            type="file"
            id="file-upload"
            name="file-upload"
            onChange={handleImageUpload}></input>
        </div>
        <button type='submit' disabled={!isFormFilled()} className="regBtn">Register</button>
        <span> Already have an account?<Link to="/login"> click here </Link> to login</span>
      </form>

      {formError && <span className='errorMessage'>{formError}</span>}
    </div>
  );
}

export default RegisterScreen;