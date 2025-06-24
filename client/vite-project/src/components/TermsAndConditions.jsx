import React from "react";
import { Link } from "react-router-dom";
import PageWrapper from "./PageWrapper";

export default function TermsAndConditions() {
  return (
    <PageWrapper>
      <section className="signup-section">
        <div className="signup-card">
          <h2>Terms and Conditions</h2>
          <p>
            Welcome to SkillDrift. By accessing or using our platform, you agree to the following terms:
          </p>
          <ul>
            <li>You must be at least 13 years old to use our services.</li>
            <li>Respectful and professional behavior is expected at all times.</li>
            <li>Your data is protected and used only to improve your experience.</li>
            <li>You may not use our platform for any illegal activities.</li>
            <li>We reserve the right to update these terms at any time.</li>
          </ul>
          <p>
            For full legal terms, please contact us or read the privacy policy.
          </p>

          <div style={{ marginTop: "30px", textAlign: "center" }}>
            <Link to="/signup">
              <button className="primary-button">Back to Sign Up</button>
            </Link>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
