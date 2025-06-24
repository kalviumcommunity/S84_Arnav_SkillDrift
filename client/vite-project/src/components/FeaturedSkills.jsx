import React from "react";


const skills = [
  {
    id: 1,
    category: "Programming",
    title: "JavaScript Fundamentals",
    instructor: "Sarah Chen",
    rating: 4.9,
    students: 1234,
    level: "Beginner",
    duration: "6 weeks",
    price: "Free",
  },
  {
    id: 2,
    category: "Marketing",
    title: "Digital Marketing Strategy",
    instructor: "Mike Rodriguez",
    rating: 4.8,
    students: 856,
    level: "Intermediate",
    duration: "4 weeks",
    price: "$49",
  },
  {
    id: 3,
    category: "Design",
    title: "UI/UX Design Principles",
    instructor: "Emma Thompson",
    rating: 4.9,
    students: 2103,
    level: "Beginner",
    duration: "8 weeks",
    price: "$79",
  },
  {
    id: 4,
    category: "Data Science",
    title: "Data Science with Python",
    instructor: "David Kim",
    rating: 4.7,
    students: 967,
    level: "Advanced",
    duration: "12 weeks",
    price: "$99",
  },
];

const FeaturedSkills = () => {
  return (
    <section className="featured-skills">
      <div className="featured-skills-header">
        <div>
          <h2>Featured Skills</h2>
          <p>Popular skills taught by our community</p>
        </div>
        <button className="view-all-btn">View All →</button>
      </div>

      <div className="skill-cards">
        {skills.map((skill) => (
          <div className="skill-card" key={skill.id}>
            <div className="skill-card-header">
              <span className="skill-tag">{skill.category}</span>
              <span className="skill-price">{skill.price}</span>
            </div>
            <h3 className="skill-title">{skill.title}</h3>
            <p className="skill-instructor">{skill.instructor}</p>
            <div className="skill-stats">
              <span>⭐ {skill.rating}</span>
              <span>👥 {skill.students}</span>
            </div>
            <div className="skill-meta">
              <span>{skill.level}</span>
              <span>{skill.duration}</span>
            </div>
            <button className="skill-button">▶ Start Learning</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedSkills;
