import React, { useState } from "react";
import "../styles/Login.css";
import hikingImage from "../assets/images/hiker.jpg";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const response = await axios.post("http://localhost:8080/api/auth/login", { email, password });
            const { token, role } = response.data;

            localStorage.setItem("token", token);
            localStorage.setItem("role", role);
            console.log(role);
            alert("Login Successful!");
            navigate("/");
        } catch (err) {
            setError(err.response?.data?.error || "Login failed");
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <div className="login-content">
                    <h2>Login</h2>
                    <p>
                        DIDN'T HAVE AN ACCOUNT? <a href="/register">Sign Up</a>
                    </p>
                    {error && <p className="error-message">{error}</p>}
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
