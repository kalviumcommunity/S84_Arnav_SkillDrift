import React, { useState } from "react";
import { Link } from "react-router-dom";
import PageWrapper from "./PageWrapper";
import axios from "axios";
import "../App.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/users/login", {
        email,
        password,
      });

      setSuccessMessage(response.data.message);
      setEmail("");
      setPassword("");

      // You can redirect after success using:
      // navigate("/dashboard");

    } catch (err) {
      alert(err.response?.data?.error || "Login failed. Try again.");
    }
  };

  const handleGoogleLogin = () => {
    alert("Google Login feature coming soon!");
  };

  return (
    <PageWrapper>
      <section className="signup-section">
        <div className="signup-card">
          <h2>Welcome Back to SkillDrift</h2>
          <p>Log in to continue your learning journey.</p>

          {successMessage && (
            <div className="success-message">✅ {successMessage}</div>
          )}

          <form className="signup-form" onSubmit={handleLoginSubmit}>
            <input
              type="email"
              placeholder="Email Address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit">Log In</button>
          </form>

          <div className="divider">or</div>

          <div className="oauth-buttons">
            <button className="oauth-btn google" onClick={handleGoogleLogin}>
              <img src="/google-icon.svg" alt="Google" />
              Log in with Google
            </button>
          </div>

          <p className="login-redirect">
            Don’t have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </section>
    </PageWrapper>
  );
}
