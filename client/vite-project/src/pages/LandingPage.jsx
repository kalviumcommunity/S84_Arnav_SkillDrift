import React from "react";
import { Star, User } from "lucide-react";

// ✅ SkillTag component (used inside SkillCard)
function SkillTag({ category }) {
  return (
    <span className="bg-blue-100 text-blue-800 px-2 py-1 text-xs rounded">
      {category}
    </span>
  );
}

// ✅ SkillCard component
function SkillCard({
  title,
  instructor,
  rating,
  students,
  level,
  duration,
  category,
  price,
}) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition">
      <div className="flex justify-between items-center mb-2">
        <SkillTag category={category} />
        <span className="text-green-600 font-semibold">{price}</span>
      </div>

      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-500 text-sm mt-1">{instructor}</p>

      <div className="flex items-center gap-2 text-sm text-gray-600 mt-2">
        <Star className="w-4 h-4 text-yellow-500" fill="currentColor" />
        {rating}
        <User className="w-4 h-4 ml-4" />
        {students}
      </div>

      <div className="text-sm text-gray-500 mt-2">
        <p>{level}</p>
        <p>{duration}</p>
      </div>

      <button className="mt-4 w-full bg-black text-white py-2 rounded hover:opacity-90 transition">
        ▶ Start Learning
      </button>
    </div>
  );
}

// ✅ SearchBar component
function SearchBar() {
  return (
    <div className="search-bar">
      <input type="text" placeholder="What do you want to learn?" />
      <button>Search Skills</button>
    </div>
  );
}

// ✅ Stats component placeholder
function Stats() {
  return (
    <div className="stats">
      <p>📚 1,000+ Skills | 🌍 200+ Countries | 👥 50,000+ Learners</p>
    </div>
  );
}

// ✅ CategoryCard component
function CategoryCard({ emoji, title, count }) {
  return (
    <div className="category-card">
      <div style={{ fontSize: "2rem" }}>{emoji}</div>
      <h3>{title}</h3>
      <p>{count} skills</p>
    </div>
  );
}

// ✅ ExploreCategories component
function ExploreCategories() {
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

// ✅ Hero component
function Hero() {
  return (
    <section className="hero">
      <h1>
        Learn Skills from <span className="gradient-text">Peers</span>
      </h1>
      <p>
        Connect with skilled individuals worldwide. Learn new skills, teach
        what you know, and grow together in our peer-to-peer learning community.
      </p>
      <SearchBar />
      <Stats />
    </section>
  );
}

// ✅ Main component (exported)
export default function AllInOneComponent() {
  return (
    <div>
      <Hero />
      <ExploreCategories />
      {/* You can add <SkillCard /> here with props to render sample cards */}
    </div>
  );
}
