import React from "react";
import "../styles/Register.css";

const Register = () => {
  return (
    <div className="register-container">
      <div className="register-box">
        <div className="register-content">
          <h2>Sign Up</h2>
          <p>Already have an account? <a href="/login">Login</a></p>

          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="email" placeholder="Email" />
          <div className="password-fields">
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Password" />
          </div>

          <div className="file-upload">
            <label className="file-label">
              Receipt <span className="add-file">+ Add file</span>
              <input type="file" className="file-input" />
            </label>
          </div>

          <button className="register-button">Register</button>
        </div>

        <div className="register-image">
          <img src="signup-image.png" alt="Sign Up" />
        </div>
      </div>
    </div>
  );
};

export default Register;
