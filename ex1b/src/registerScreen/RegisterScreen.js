import './RegisterScreen.css';
import React, { useState } from "react";
import myImage from '../image/minions.webp';
import { useNavigate } from "react-router-dom";


function RegisterScreen() {
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
        }
        if (username.trim() === displayName.trim()) {
            setFormError("Username and display name cannot be the same.");
        } else {

            setFormError("");
            localStorage.setItem("userID", `${username}`);
            localStorage.setItem("password", `${confirmPassword}`);
            navigate("/chat")
        }
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => setSelctedImage(reader.result);

        if (file) {
            reader.readAsDataURL(file);
        }
    }

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
                    placeholder="Type your user name:"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

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
                        onChange={(e) => setPassword(e.target.value)}
                    />

                </div>

                <div className="form-field">
                    <label htmlFor="confirm-password"></label>
                    <input
                        type="password"
                        id="confirm-password"
                        name="confirm-password"
                        placeholder="Enter password again:"
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
                        placeholder="Enter display name:"
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
            </form>

            <button type='submit' onClick={handleSubmit} className="regBtn">Register</button>
            {formError && <span className='errorMessage'>{formError}</span>}

        </div>
    );
}

export default RegisterScreen;