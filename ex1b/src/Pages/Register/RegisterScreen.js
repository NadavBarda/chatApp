import './RegisterScreen.css';
import { useEffect, useState } from "react";
import myImage from '../../image/minions.webp';
import { useNavigate, Link } from "react-router-dom";
import ImageUpload from '../../Components/RegisterScreen/ImageUpload'
import PasswordMessage from '../../Components/RegisterScreen/PasswordMessage'
import TextInput from '../../Components/RegisterScreen/TextInput'

const RegisterScreen = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [formError, setFormError] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [displayName, setDisplayName] = useState("");
  const userImg = myImage;
  const [selectedImage, setSelectedImage] = useState(myImage);


  const navigate = useNavigate();

  const handlePassword = (password) => {
    setPassword(password);
    console.log(password);
    if (!validatePassword(password)) {
      setPasswordMessage("Please enter a valid password");
    }
    else {
      setPasswordMessage("");
    }

  }

  const handleSubmit = (event) => {

    event.preventDefault();

    const storedData = localStorage.getItem("registerUsers");
    const registerUsers = storedData ? JSON.parse(storedData) : [];

    if (password !== confirmPassword) {
      setFormError("Passwords do not match");
      return;
    }

    if (username.trim() === displayName.trim()) {
      setFormError("Username and display name cannot be the same.");
      return;
    }

    setFormError("");

    const newUser = {
      username: username,
      password: password,
      confirmPassword: confirmPassword,
      displayName: displayName,
      userImg: selectedImage,
    };

    registerUsers.push(newUser);
    localStorage.setItem("registerUsers", JSON.stringify(registerUsers));

    navigate("/login");
  };

  const isFormFilled = () => {
    return username && password && confirmPassword && displayName;
  }

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    if (!file.type.match('image.*')) {
      setFormError("Please upload an image.");
      return;
    }

    reader.onloadend = () => setSelectedImage(reader.result);

    reader.readAsDataURL(file);
  };
  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(password);
  };

  return (
    <div className="RegisterScreen">
      <h1 className="title"> Register</h1>
      <form onSubmit={handleSubmit} className="form">
        <TextInput
          type="text"
          id="username"
          name="username"
          placeholder="Type your username"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextInput
          type="password"
          id="password"
          name="password"
          placeholder="Enter password"
          required
          pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
          value={password}
          onChange={(e) => handlePassword(e.target.value)}
        />
        {passwordMessage && <PasswordMessage message={passwordMessage} />}
        <TextInput
      type="password"
      id="confirm-password"
      name="confirm-password"
      placeholder="Enter password again"
      required
      value={confirmPassword}
      onChange={(e) => setConfirmPassword(e.target.value)}
    />
    <TextInput
      type="text"
      id="display-name"
      name="display-name"
      placeholder="Enter display name"
      required
      value={displayName}
      onChange={(e) => setDisplayName(e.target.value)}
    />
    <ImageUpload selectedImage={selectedImage} handleImageUpload={handleImageUpload} />
    <button type="submit" disabled={!isFormFilled()} className="regBtn">
      Register
    </button>
    <span>
      Already have an account?<Link to="/login"> click here </Link> to login
    </span>
  </form>
  {formError && <span className="errorMessage">{formError}</span>}
</div>
);
};

export default RegisterScreen;