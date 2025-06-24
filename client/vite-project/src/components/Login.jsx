import React from "react";
import { Link } from "react-router-dom";
import PageWrapper from "./PageWrapper";
import "../App.css";

export default function Login() {
  return (
    <PageWrapper>
      <section className="signup-section">
        <div className="signup-card">
          <h2>Welcome Back to SkillDrift</h2>
          <p>Log in to continue growing your skills.</p>
          <form className="signup-form">
            <input type="email" placeholder="Email Address" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Log In</button>
          </form>
          <p className="login-redirect">
            Don’t have an account? <Link to="/signup">Sign up</Link>
          </p>
        </div>
      </section>
    </PageWrapper>
  );
}
