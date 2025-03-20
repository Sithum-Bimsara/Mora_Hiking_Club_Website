
import React, { useState } from "react";
import "../styles/Login.css";
import hikingImage from "../assets/images/hiker.jpg";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState(""); // For error handling

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(""); // Reset errors before a new request

        try {
            const response = await fetch("http://localhost:8080/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Login failed");
            } else {
                alert("Login Successful!");
            }

            // Store token in localStorage
            localStorage.setItem("token", data.token);

            // Redirect to home page or dashboard
            navigate("/");
        } catch (err) {
            setError(err.message);
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
                    {error && <p className="error-message">{error}</p>} {/* Display error message */}
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

