import React from "react";
import {
  Target,
  CheckCircle2,
  Hourglass,
  TrendingUp,
  Calendar,
  ArrowRight,
} from "lucide-react";

export default function LearningGoals() {
  const goals = [
    {
      title: "Master Advanced React Patterns",
      desc: "Learn HOCs, render props, and performance optimization techniques.",
      progress: 80,
      deadline: "Dec 5, 2025",
      sessions: 12,
      totalSessions: 15,
      status: "In Progress",
      color: "from-purple-500 to-indigo-500",
    },
    {
      title: "Get Comfortable with Node.js & Express",
      desc: "Build full-stack APIs and connect with MongoDB.",
      progress: 65,
      deadline: "Dec 12, 2025",
      sessions: 7,
      totalSessions: 10,
      status: "In Progress",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Learn UI/UX Design Fundamentals",
      desc: "Understand design systems, typography, and accessibility.",
      progress: 100,
      deadline: "Nov 30, 2025",
      sessions: 10,
      totalSessions: 10,
      status: "Completed",
      color: "from-pink-500 to-rose-500",
    },
    {
      title: "Start Learning TypeScript",
      desc: "Enhance JavaScript skills and learn strong typing for React apps.",
      progress: 40,
      deadline: "Jan 15, 2026",
      sessions: 4,
      totalSessions: 10,
      status: "Not Started",
      color: "from-orange-400 to-yellow-500",
    },
  ];

  const totalGoals = goals.length;
  const completedGoals = goals.filter((g) => g.progress === 100).length;
  const inProgressGoals = goals.filter((g) => g.progress < 100 && g.progress > 0).length;
  const successRate = Math.round((completedGoals / totalGoals) * 100);

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">Learning Goals</h1>
          <p className="text-lg text-gray-500 mt-2">
            Stay on top of your skill-building journey with clear, trackable goals.
          </p>
        </div>
        <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium text-lg hover:bg-purple-700 transition">
          + Add New Goal
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <SummaryCard
          icon={<Target className="text-purple-600" size={26} />}
          label="Total Goals"
          value={totalGoals}
        />
        <SummaryCard
          icon={<CheckCircle2 className="text-green-500" size={26} />}
          label="Completed"
          value={completedGoals}
        />
        <SummaryCard
          icon={<Hourglass className="text-pink-500" size={26} />}
          label="In Progress"
          value={inProgressGoals}
        />
        <SummaryCard
          icon={<TrendingUp className="text-yellow-500" size={26} />}
          label="Success Rate"
          value={`${successRate}%`}
        />
      </div>

      {/* Goals List */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        {goals.map((goal, i) => (
          <GoalCard key={i} {...goal} />
        ))}
      </div>
    </div>
  );
}

/* -------- Summary Card Component -------- */
const SummaryCard = ({ icon, label, value }) => (
  <div className="bg-white rounded-2xl shadow-sm p-8 hover:shadow-md transition">
    <div className="flex items-center justify-between mb-4">
      <div className="bg-gray-50 p-4 rounded-xl">{icon}</div>
    </div>
    <h2 className="text-4xl font-bold text-gray-900 mb-1">{value}</h2>
    <p className="text-gray-600 text-base">{label}</p>
  </div>
);

/* -------- Individual Goal Card Component -------- */
const GoalCard = ({ title, desc, progress, deadline, sessions, totalSessions, status, color }) => {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg transition p-8 flex flex-col justify-between">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
          <p className="text-base text-gray-500">{desc}</p>
        </div>
        <span
          className={`text-sm font-semibold px-3.5 py-1.5 rounded-full ${
            status === "Completed"
              ? "bg-green-100 text-green-700"
              : status === "In Progress"
              ? "bg-purple-100 text-purple-700"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          {status}
        </span>
      </div>

      {/* Progress */}
      <div className="space-y-2 mb-6">
        <div className="w-full bg-gray-100 h-3 rounded-full overflow-hidden">
          <div
            className={`h-3 bg-gradient-to-r ${color}`}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-500">
          {progress}% completed — {sessions} / {totalSessions} sessions done
        </p>
      </div>

      {/* Stats */}
      <div className="flex items-center justify-between text-base text-gray-600 mb-6">
        <span className="flex items-center gap-1.5">
          <Calendar size={16} /> Deadline: {deadline}
        </span>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <button className="text-base text-purple-600 font-semibold hover:text-purple-700 flex items-center gap-1">
          View Details <ArrowRight size={16} />
        </button>
        {progress === 100 && (
          <span className="text-green-600 font-medium flex items-center gap-1">
            ✅ Goal Achieved
          </span>
        )}
      </div>
    </div>
  );
};
