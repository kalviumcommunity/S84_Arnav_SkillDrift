import React from "react";
import { useNavigate, Link } from "react-router-dom";


export default function Navbar() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleGetStarted = () => {
    navigate("/signup");
  };

  return (
    <nav>
      {/* ✅ Make logo clickable to go home */}
      <div className="logo">
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          SkillDrift
        </Link>
      </div>

      <ul>
        <li>Browse Skills</li>
        <li>Teach</li>
        <li>Community</li>
        <li>About</li>
      </ul>

      <div>
        <button onClick={handleLogin}>Sign In</button>
        <button
          onClick={handleGetStarted}
          style={{
            marginLeft: "8px",
            background: "#222",
            color: "white",
            padding: "8px 16px",
            borderRadius: "4px",
          }}
        >
          Get Started
        </button>
      </div>
    </nav>
  );
}
