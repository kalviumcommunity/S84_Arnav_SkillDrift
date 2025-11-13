import React, { useState } from "react";
import {
  Users,
  MessageSquare,
  Calendar,
  Plus,
  ArrowRight,
  CheckCircle2,
  Clock,
  Target,
} from "lucide-react";

export default function SkillCircles() {
  const [filter, setFilter] = useState("all");

  const circles = [
    {
      name: "React Developers Circle",
      desc: "Collaborate on React projects, learn hooks, and share advanced patterns.",
      members: 24,
      nextSession: "Nov 18, 2025",
      progress: 78,
      color: "from-purple-500 to-indigo-500",
      tag: "Frontend",
      status: "Active",
      avatars: [
        "https://randomuser.me/api/portraits/men/12.jpg",
        "https://randomuser.me/api/portraits/women/45.jpg",
        "https://randomuser.me/api/portraits/men/21.jpg",
      ],
    },
    {
      name: "Node.js & Express Learners",
      desc: "Dive deep into backend APIs, routing, and RESTful services.",
      members: 18,
      nextSession: "Nov 20, 2025",
      progress: 60,
      color: "from-green-500 to-emerald-500",
      tag: "Backend",
      status: "Active",
      avatars: [
        "https://randomuser.me/api/portraits/women/33.jpg",
        "https://randomuser.me/api/portraits/men/36.jpg",
      ],
    },
    {
      name: "UI/UX Design Innovators",
      desc: "Discuss color theory, typography, and usability best practices.",
      members: 15,
      nextSession: "Nov 25, 2025",
      progress: 100,
      color: "from-pink-500 to-rose-500",
      tag: "Design",
      status: "Completed",
      avatars: [
        "https://randomuser.me/api/portraits/women/62.jpg",
        "https://randomuser.me/api/portraits/men/53.jpg",
      ],
    },
    {
      name: "Full-Stack Builders",
      desc: "Connect frontend and backend concepts into real-world applications.",
      members: 30,
      nextSession: "Nov 30, 2025",
      progress: 40,
      color: "from-orange-400 to-yellow-500",
      tag: "Full Stack",
      status: "Active",
      avatars: [
        "https://randomuser.me/api/portraits/men/47.jpg",
        "https://randomuser.me/api/portraits/women/19.jpg",
      ],
    },
  ];

  const filtered =
    filter === "all" ? circles : circles.filter((c) => c.status.toLowerCase() === filter);

  const totalCircles = circles.length;
  const activeCircles = circles.filter((c) => c.status === "Active").length;
  const completedCircles = circles.filter((c) => c.status === "Completed").length;
  const avgProgress = Math.round(
    circles.reduce((a, b) => a + b.progress, 0) / circles.length
  );

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">Skill Circles</h1>
          <p className="text-lg text-gray-500 mt-2">
            Join peer groups, collaborate on goals, and accelerate your learning together.
          </p>
        </div>

        <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium text-lg hover:bg-purple-700 transition flex items-center gap-2">
          <Plus size={20} /> Join New Circle
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center bg-gray-100 rounded-xl p-1.5 w-fit">
        {["all", "active", "completed"].map((tab) => (
          <button
            key={tab}
            onClick={() => setFilter(tab)}
            className={`px-6 py-2.5 rounded-md text-base font-semibold capitalize transition-all ${
              filter === tab
                ? "bg-white text-purple-600 shadow-sm"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Summary Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <SummaryCard
          icon={<Users className="text-purple-600" size={26} />}
          label="Total Circles"
          value={totalCircles}
        />
        <SummaryCard
          icon={<Clock className="text-green-500" size={26} />}
          label="Active Circles"
          value={activeCircles}
        />
        <SummaryCard
          icon={<CheckCircle2 className="text-pink-500" size={26} />}
          label="Completed"
          value={completedCircles}
        />
        <SummaryCard
          icon={<Target className="text-yellow-500" size={26} />}
          label="Avg Progress"
          value={`${avgProgress}%`}
        />
      </div>

      {/* Circle Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        {filtered.map((circle, i) => (
          <CircleCard key={i} {...circle} />
        ))}
      </div>

      {/* Empty State */}
      {filtered.length === 0 && (
        <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-12 text-center">
          <Users className="w-12 h-12 mx-auto text-gray-400 mb-4" />
          <h3 className="text-xl font-semibold text-gray-700">No circles found</h3>
          <p className="text-gray-500 mt-2 text-base">
            Join or create a new circle to start collaborating with peers.
          </p>
        </div>
      )}
    </div>
  );
}

/* ---------- Summary Card ---------- */
const SummaryCard = ({ icon, label, value }) => (
  <div className="bg-white rounded-2xl shadow-sm p-8 hover:shadow-md transition">
    <div className="flex items-center justify-between mb-4">
      <div className="bg-gray-50 p-4 rounded-xl">{icon}</div>
    </div>
    <h2 className="text-4xl font-bold text-gray-900 mb-1">{value}</h2>
    <p className="text-gray-600 text-base">{label}</p>
  </div>
);

/* ---------- Circle Card ---------- */
const CircleCard = ({
  name,
  desc,
  members,
  nextSession,
  progress,
  color,
  tag,
  avatars,
  status,
}) => (
  <div className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg transition p-8 flex flex-col justify-between">
    {/* Header */}
    <div className="flex items-center justify-between mb-4">
      <div>
        <h3 className="text-2xl font-semibold text-gray-900">{name}</h3>
        <p className="text-base text-gray-500">{desc}</p>
      </div>
      <span
        className={`text-sm font-semibold px-3.5 py-1.5 rounded-full ${
          status === "Completed"
            ? "bg-green-100 text-green-700"
            : "bg-purple-100 text-purple-700"
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
      <p className="text-sm text-gray-500">{progress}% circle progress</p>
    </div>

    {/* Members and Info */}
    <div className="flex items-center justify-between text-base text-gray-600 mb-6">
      <span className="flex items-center gap-1.5">
        <Users size={16} /> {members} Members
      </span>
      <span className="flex items-center gap-1.5">
        <Calendar size={16} /> Next: {nextSession}
      </span>
    </div>

    {/* Footer */}
    <div className="flex items-center justify-between">
      <div className="flex -space-x-4">
        {avatars.map((a, i) => (
          <img
            key={i}
            src={a}
            alt="member"
            className="w-12 h-12 rounded-full border-2 border-white shadow-sm"
          />
        ))}
      </div>
      <div className="flex items-center gap-3">
        <span className="bg-gray-100 px-3 py-1 text-sm rounded-full text-gray-600">
          #{tag}
        </span>
        <button className="text-base text-purple-600 font-semibold hover:text-purple-700 flex items-center gap-1">
          View Circle <ArrowRight size={16} />
        </button>
      </div>
    </div>
  </div>
);
