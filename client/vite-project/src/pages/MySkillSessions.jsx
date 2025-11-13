import React, { useState } from "react";
import {
  BookOpen,
  Video,
  BarChart3,
  Calendar,
  Star,
  ArrowRight,
  Award,
} from "lucide-react";

export default function MySkillSessions() {
  const [filter, setFilter] = useState("all");

  const sessions = [
    {
      skill: "React.js",
      type: "Teaching",
      completed: 8,
      total: 12,
      nextDate: "Nov 15, 2025",
      rating: 4.9,
      streak: 5,
      color: "from-purple-500 to-indigo-500",
      peers: [
        { name: "Jessica Lee", avatar: "https://randomuser.me/api/portraits/women/44.jpg" },
        { name: "Michael Torres", avatar: "https://randomuser.me/api/portraits/men/52.jpg" },
      ],
    },
    {
      skill: "Node.js",
      type: "Learning",
      completed: 6,
      total: 10,
      nextDate: "Nov 18, 2025",
      rating: 4.7,
      streak: 3,
      color: "from-green-500 to-emerald-500",
      peers: [
        { name: "Daniel Park", avatar: "https://randomuser.me/api/portraits/men/31.jpg" },
      ],
    },
    {
      skill: "MongoDB",
      type: "Learning",
      completed: 5,
      total: 8,
      nextDate: "Nov 20, 2025",
      rating: 4.8,
      streak: 2,
      color: "from-emerald-400 to-teal-500",
      peers: [
        { name: "Sophia Kim", avatar: "https://randomuser.me/api/portraits/women/65.jpg" },
      ],
    },
    {
      skill: "Express.js",
      type: "Teaching",
      completed: 4,
      total: 7,
      nextDate: "Nov 22, 2025",
      rating: 4.6,
      streak: 4,
      color: "from-pink-500 to-rose-500",
      peers: [
        { name: "Aisha Khan", avatar: "https://randomuser.me/api/portraits/women/24.jpg" },
      ],
    },
  ];

  const filtered = sessions.filter(
    (s) => filter === "all" || s.type.toLowerCase() === filter
  );

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">My Skill Sessions</h1>
          <p className="text-lg text-gray-500 mt-2">
            Track your ongoing teaching and learning sessions by skill.
          </p>
        </div>

        <div className="flex items-center bg-gray-100 rounded-xl p-1.5">
          {["all", "teaching", "learning"].map((tab) => (
            <button
              key={tab}
              className={`px-6 py-2.5 rounded-md text-base font-semibold capitalize transition-all ${
                filter === tab
                  ? "bg-white text-purple-600 shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setFilter(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <SummaryCard
          icon={<BookOpen className="text-purple-600" size={26} />}
          label="Total Skills"
          value={sessions.length}
        />
        <SummaryCard
          icon={<Video className="text-pink-500" size={26} />}
          label="Total Sessions"
          value={sessions.reduce((a, b) => a + b.total, 0)}
        />
        <SummaryCard
          icon={<BarChart3 className="text-green-500" size={26} />}
          label="Completed"
          value={sessions.reduce((a, b) => a + b.completed, 0)}
        />
        <SummaryCard
          icon={<Award className="text-yellow-500" size={26} />}
          label="Avg Rating"
          value={`${(
            sessions.reduce((a, b) => a + b.rating, 0) / sessions.length
          ).toFixed(1)}`}
        />
      </div>

      {/* Skill Sessions List */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        {filtered.map((s, i) => (
          <SkillSessionCard key={i} {...s} />
        ))}
      </div>

      {/* Empty State */}
      {filtered.length === 0 && (
        <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-12 text-center">
          <BookOpen className="w-12 h-12 mx-auto text-gray-400 mb-4" />
          <h3 className="text-xl font-semibold text-gray-700">
            No sessions found
          </h3>
          <p className="text-gray-500 mt-2 text-base">
            Start learning or teaching a new skill to see progress here.
          </p>
        </div>
      )}
    </div>
  );
}

/* --------------------- Sub Components --------------------- */

const SummaryCard = ({ icon, label, value }) => (
  <div className="bg-white rounded-2xl shadow-sm p-8 hover:shadow-md transition">
    <div className="flex items-center justify-between mb-4">
      <div className="bg-gray-50 p-4 rounded-xl">{icon}</div>
    </div>
    <h2 className="text-4xl font-bold text-gray-900 mb-1">{value}</h2>
    <p className="text-gray-600 text-base">{label}</p>
  </div>
);

const SkillSessionCard = ({
  skill,
  type,
  completed,
  total,
  nextDate,
  rating,
  streak,
  color,
  peers,
}) => {
  const progress = Math.round((completed / total) * 100);

  return (
    <div className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg transition p-8 flex flex-col justify-between">
      {/* Skill Header */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <h3 className="text-2xl font-semibold text-gray-900">{skill}</h3>
          <p className="text-base text-gray-500">{type} Sessions</p>
        </div>
        <span
          className={`text-sm font-semibold px-3.5 py-1.5 rounded-full ${
            type === "Teaching"
              ? "bg-purple-100 text-purple-700"
              : "bg-pink-100 text-pink-700"
          }`}
        >
          {type}
        </span>
      </div>

      {/* Progress Bar */}
      <div className="space-y-2 mb-6">
        <div className="w-full bg-gray-100 h-3 rounded-full overflow-hidden">
          <div
            className={`h-3 bg-gradient-to-r ${color}`}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-500">
          {completed} of {total} sessions completed ({progress}%)
        </p>
      </div>

      {/* Stats */}
      <div className="flex flex-wrap items-center justify-between text-base text-gray-600 mb-6">
        <span className="flex items-center gap-1.5">
          <Calendar size={16} /> Next: {nextDate}
        </span>
        <span className="flex items-center gap-1.5">
          <Star size={16} className="text-yellow-500" /> {rating}
        </span>
        <span className="flex items-center gap-1.5">
          🔥 Streak: {streak} days
        </span>
      </div>

      {/* Peers */}
      <div className="flex items-center justify-between">
        <div className="flex -space-x-4">
          {peers.map((p, i) => (
            <img
              key={i}
              src={p.avatar}
              alt={p.name}
              className="w-12 h-12 rounded-full border-2 border-white shadow-sm"
            />
          ))}
        </div>
        <button className="text-base text-purple-600 font-semibold hover:text-purple-700 flex items-center gap-1">
          View Details <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};
