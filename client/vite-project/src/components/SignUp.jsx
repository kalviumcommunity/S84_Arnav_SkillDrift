import React, { useState } from "react";
import { Link } from "react-router-dom";
import PageWrapper from "./PageWrapper";
import "../App.css";

export default function SignUp() {
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agreeTerms) {
      alert("Please agree to the Terms and Conditions before signing up.");
      return;
    }
    // Submit logic here
  };

  return (
    <PageWrapper>
      <section className="signup-section">
        <div className="signup-card">
          <h2>Create Your SkillDrift Account</h2>
          <p>Join thousands growing their skills with us.</p>
          <form className="signup-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="password" placeholder="Password" required />
            <input type="password" placeholder="Confirm Password" required />

            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                required
              />
              I agree to the <Link to="/terms">Terms and Conditions</Link>
            </label>

            <label className="checkbox-label">
              <input type="checkbox" />
              Subscribe to our newsletter
            </label>

            <button type="submit">Sign Up</button>
          </form>

          <p className="login-redirect">
            Already have an account? <Link to="/login">Log in</Link>
          </p>
        </div>
      </section>
    </PageWrapper>
  );
}
