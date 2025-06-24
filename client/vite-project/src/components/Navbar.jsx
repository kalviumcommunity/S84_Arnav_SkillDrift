import React from "react";

export default function Navbar() {
  return (
    <nav>
      <div className="logo">SkillDrift</div>
      <ul>
        <li>Browse Skills</li>
        <li>Teach</li>
        <li>Community</li>
        <li>About</li>
      </ul>
      <div>
        <button>Sign In</button>
        <button style={{ marginLeft: "8px", background: "#222", color: "white", padding: "8px 16px", borderRadius: "4px" }}>Get Started</button>
      </div>
    </nav>
  );
}
