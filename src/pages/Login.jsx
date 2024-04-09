import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [showForgotPasswordText, setShowForgotPasswordText] = useState(false);

  const handleForgotPasswordClick = () => {
    setShowForgotPasswordText(true);
  };

  return (
    <div className="login-container">
      {/* Background Image */}
      <div className="background-image"></div>

      {/* Login Form */}
      <div className="login-form">
        <h2>Login</h2>
        <form>
          {/* Input Group */}
          <div className="input-group">
            <input type="text" placeholder="CMS-ID" />
            <input type="password" placeholder="Password" />
          </div>

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
