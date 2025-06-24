import React from "react";
import CategoryCard from "./CategoryCard";

const categories = [
  { emoji: "💻", title: "Programming", count: 245 },
  { emoji: "🎨", title: "Design", count: 189 },
  { emoji: "📈", title: "Marketing", count: 156 },
  { emoji: "💼", title: "Business", count: 134 },
  { emoji: "📷", title: "Photography", count: 98 },
  { emoji: "🎵", title: "Music", count: 87 },
  { emoji: "✍️", title: "Writing", count: 76 },
  { emoji: "🌍", title: "Languages", count: 65 },
];

export default function ExploreCategories() {
  return (
    <section className="explore">
      <h2>Explore Categories</h2>
      <p>Discover skills across various domains</p>

      <div className="category-grid">
        {categories.map((cat) => (
          <CategoryCard
            key={cat.title}
            emoji={cat.emoji}
            title={cat.title}
            count={cat.count}
          />
        ))}
      </div>
    </section>
  );
}
