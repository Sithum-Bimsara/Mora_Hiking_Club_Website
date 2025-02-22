import React from "react";
import "../styles/Login.css";
import hikingImage from "../assets/images/1.jpg";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    return (
        <div className="login-container">
            <div className="login-box">
                <div className="login-content">
                    <h2>Login</h2>
                    <p>
                        DON'T HAVE AN ACCOUNT? <a href="#">Sign Up</a>
                    </p>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button onClick={() => navigate('/')} className="login-button">Login</button>
                </div>
                <div className="login-image">
                    <img src={hikingImage} alt="Hiker Illustration" />
                </div>
            </div>
        </div>
    );
};

export default Login;
