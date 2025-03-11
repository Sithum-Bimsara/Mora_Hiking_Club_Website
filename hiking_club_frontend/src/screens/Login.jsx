
import React, { useState } from "react";
import "../styles/Login.css";
import hikingImage from "../assets/images/hiker.jpg";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your login logic here
        console.log("Email:", email);
        console.log("Password:", password);
        navigate('/');
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <div className="login-content">
                    <h2>Login</h2>
                    <p>
                        DIDN'T HAVE AN ACCOUNT? <a href="/register">Sign Up</a>
                    </p>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button type="submit" className="login-button">Login</button>
                    </form>
                </div>
                <div className="login-image">
                    <img src={hikingImage} alt="Hiker" />
                </div>
            </div>
        </div>
    );
};

export default Login;


