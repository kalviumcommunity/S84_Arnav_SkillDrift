import React from "react";

export default function CategoryCard({ emoji, title, count }) {
  return (
    <div className="category-card">
      <div style={{ fontSize: "2rem" }}>{emoji}</div>
      <h3>{title}</h3>
      <p>{count} skills</p>
    </div>
  );
}
