import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom'; // Import useHistory from react-router-dom
import { useNavigate } from 'react-router-dom';
import './Login.css';
import axios from "axios";

const Login = () => {
  const [showForgotPasswordText, setShowForgotPasswordText] = useState(false);
  const [cms, setCms] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // const history = useHistory(); // Initialize useHistory
  const navigate = useNavigate();


  const handleForgotPasswordClick = () => {
    setShowForgotPasswordText(true);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = { cms, password };
      if (!cms) {
        setError("CMS Id is required");
        return;
      } else if (!password) {
        setError("Password is required");
        return;
      } else {
        setError(""); // Clear any previous errors
        const res = await axios.post('http://localhost:8000/login', userData);
        console.log(res); // Log the response
        // Redirect to dashboard upon successful login
        navigate('/users/dashboard');
      }
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message); // Set the error message from the server response
      } else {
        setError("Something went wrong try again later!"); // Set a generic error message
      }
    }
  };

  return (
    <div className="login-container">
      {/* Background Image */}
      <div className="background-image"></div>

      {/* Login Form */}
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          {/* Input Group */}
          <div className="input-group">
            <input type="text" placeholder="CMS-ID" value={cms} onChange={e => setCms(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
          </div>
          {/* Error message */}
          {error && <div className="error text-red-500">{error}</div>} {/* Display error if exists */}

          {/* Remember Me and Forgot Password */}
          <div className="remember-forgot-group">
            {/* Custom checkbox input */}
            <input type="checkbox" id="rememberCheckbox" />
            {/* Label for custom checkbox */}
            <label htmlFor="rememberCheckbox">Remember Me</label>
            {/* Forgot password link */}
            <a href="#" onClick={handleForgotPasswordClick}>Forgot Password?</a>
          </div>
          {/* Text to display when user clicks forgot password */}
          {showForgotPasswordText && (
            <div>
              Please contact support to reset your password.
            </div>
          )}

          {/* Submit Button */}
          <button type="submit">Login</button>
        </form>

        {/* Social Icons */}
        <div className="social-icons">
          <img src="https://onedrive.live.com/embed?resid=E76A35786352D215%212243&authkey=%21ANi9aqHNSES0J38&width=512&height=512" alt="Facebook" />
          <img src="https://onedrive.live.com/embed?resid=E76A35786352D215%212242&authkey=%21ABoS3oRiB3ZD_H4&width=512&height=512" alt="Twitter" />
        </div>
      </div>
    </div>
  );
};

export default Login;
