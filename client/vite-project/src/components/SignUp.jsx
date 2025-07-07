import React, { useState } from "react";
import { Link } from "react-router-dom";
import PageWrapper from "./PageWrapper";
import axios from "axios";
import { auth, provider, signInWithPopup } from "../firebase";
import { FcGoogle } from "react-icons/fc";          // colourful Google logo
import "../App.css";

export default function SignUp() {
  // ──────────────────────────────── state ────────────────────────────────
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  // ──────────────────────────────── handlers ─────────────────────────────
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({});                         // clear inline errors while typing
  };

  const validate = () => {
    const { name, email, password, confirmPassword } = formData;
    const newErrors = {};

    if (!name.trim()) newErrors.name = "Name is required";
    if (!email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = "Invalid email address";

    if (!password) newErrors.password = "Password is required";
    else if (password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    if (confirmPassword !== password)
      newErrors.confirmPassword = "Passwords do not match";

    if (!agreeTerms)
      newErrors.terms = "You must agree to the Terms and Conditions";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    try {
      const { name, email, password } = formData;
      const { data } = await axios.post("http://localhost:8080/users/signup", {
        name,
        email,
        password
      });

      setSuccessMessage(data.message);
      setFormData({ name: "", email: "", password: "", confirmPassword: "" });
      setAgreeTerms(false);
    } catch (err) {
      setErrors({
        api: err.response?.data?.error || "Signup failed. Try again."
      });
    }
  };

  const handleGoogleSignup = async () => {
    try {
      const { user } = await signInWithPopup(auth, provider);
      alert(`Welcome, ${user.displayName || user.email}!`);
      // Optional: send user info to backend here
      console.log("Google user:", user);
    } catch (err) {
      console.error("Google signup failed:", err);
      alert("Google signup failed.");
    }
  };

  // ──────────────────────────────── render ───────────────────────────────
  return (
    <PageWrapper>
      <section className="signup-section">
        <div className="signup-card">
          <h2>Create Your SkillDrift Account</h2>

          {successMessage && (
            <div className="success-message">
              ✅ {successMessage} — <Link to="/login">Login Now</Link>
            </div>
          )}

          {errors.api && <div className="error-message">{errors.api}</div>}

          <form className="signup-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            {errors.name && <div className="error-message">{errors.name}</div>}

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <div className="error-message">{errors.email}</div>}

            {/* password */}
            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <span
                className="toggle-visibility"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁️"}
              </span>
            </div>
            {errors.password && (
              <div className="error-message">{errors.password}</div>
            )}

            {/* confirm password */}
            <div className="password-wrapper">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              <span
                className="toggle-visibility"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? "🙈" : "👁️"}
              </span>
            </div>
            {errors.confirmPassword && (
              <div className="error-message">{errors.confirmPassword}</div>
            )}

            {/* terms */}
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                required
              />
              I agree to the &nbsp;
              <Link to="/terms">Terms and Conditions</Link>
            </label>
            {errors.terms && (
              <div className="error-message">{errors.terms}</div>
            )}

            <button type="submit">Sign Up</button>
          </form>

          <div className="divider">or</div>

          {/* Google OAuth button */}
          <button className="oauth-btn google" onClick={handleGoogleSignup}>
            <FcGoogle size={22} style={{ marginRight: "8px" }} />
            Sign up with Google
          </button>

          <p className="login-redirect">
            Already have an account? <Link to="/login">Log in</Link>
          </p>
        </div>
      </section>
    </PageWrapper>
  );
}
