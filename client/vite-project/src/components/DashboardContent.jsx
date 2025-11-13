import React from "react";
import {
  GraduationCap,
  Monitor,
  Video,
  Users,
  Star,
  Brain,
  Smartphone,
  Database,
} from "lucide-react";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const DashboardContent = () => {
  // --- Chart Data ---
  const skillData = [
    { name: "Development", value: 35, color: "#6366f1" },
    { name: "Design", value: 28, color: "#a855f7" },
    { name: "Languages", value: 22, color: "#ec4899" },
    { name: "Other", value: 15, color: "#f97316" },
  ];

  const sessionData = [
    { name: "Jan", Teaching: 28, Learning: 30 },
    { name: "Feb", Teaching: 33, Learning: 36 },
    { name: "Mar", Teaching: 40, Learning: 45 },
    { name: "Apr", Teaching: 38, Learning: 42 },
    { name: "May", Teaching: 48, Learning: 52 },
    { name: "Jun", Teaching: 55, Learning: 58 },
  ];

  return (
    <div className="mt-10 space-y-10">
      {/* --- Stats Cards --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          icon={<GraduationCap className="text-purple-600" size={22} />}
          label="Skills Learned"
          value="24"
          percent="+12%"
          color="bg-purple-500"
        />
        <StatCard
          icon={<Monitor className="text-pink-500" size={22} />}
          label="Skills Taught"
          value="18"
          percent="+8%"
          color="bg-pink-500"
        />
        <StatCard
          icon={<Video className="text-green-500" size={22} />}
          label="Total Sessions"
          value="142"
          percent="+23%"
          color="bg-green-500"
        />
        <StatCard
          icon={<Users className="text-orange-500" size={22} />}
          label="Peer Connections"
          value="56"
          percent="+15%"
          color="bg-orange-500"
        />
      </div>

      {/* --- Main Content Layout --- */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Upcoming Sessions */}
        <div className="col-span-2 bg-white rounded-2xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-lg font-semibold text-gray-800">
                Upcoming Sessions
              </h2>
              <p className="text-gray-500 text-sm">
                Your scheduled learning & teaching sessions
              </p>
            </div>
            <button className="text-purple-600 font-medium text-sm hover:underline">
              View All
            </button>
          </div>

          <SessionCard
            date="15"
            month="JAN"
            time="2:00 PM"
            type="LEARNING"
            status="LIVE"
            title="Advanced React Patterns"
            desc="Learn advanced React patterns including render props, HOCs, and custom hooks"
            teacher="Sarah Chen"
            duration="60 min"
            rating="4.9"
            action="Join"
          />

          <SessionCard
            date="16"
            month="JAN"
            time="4:30 PM"
            type="TEACHING"
            status="RECORDED"
            title="UI/UX Design Fundamentals"
            desc="Teaching the basics of user interface and experience design principles"
            teacher="Emily Rodriguez"
            duration="45 min"
            students="3 students"
            action="Prepare"
          />
        </div>

        {/* Right: Skill Points & Achievements */}
        <div className="space-y-6">
          <div
            className="rounded-2xl p-6 text-white shadow-md"
            style={{
              background: "linear-gradient(135deg, #f97316 0%, #ef4444 100%)",
            }}
          >
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-semibold">Skill Points</h2>
              <span className="text-2xl">🔥</span>
            </div>
            <h1 className="text-4xl font-bold mb-1">2,847</h1>
            <p className="text-sm text-white/90 mb-3">
              347 points to next level!
            </p>
            <div className="w-full bg-white/30 h-2 rounded-full mb-4">
              <div className="h-2 bg-white rounded-full w-2/3"></div>
            </div>
            <button className="bg-white text-orange-600 font-semibold text-sm w-full py-2 rounded-lg hover:bg-orange-50 transition">
              View Breakdown
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Recent Achievements
            </h2>
            <div className="space-y-4">
              <AchievementCard
                color="bg-purple-100"
                icon="🏆"
                title="Master Teacher"
                desc="Completed 50 sessions"
              />
              <AchievementCard
                color="bg-blue-100"
                icon="⭐"
                title="5-Star Rated"
                desc="Average rating above 4.5"
              />
            </div>
          </div>
        </div>
      </div>

      {/* --- Charts Section --- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Skill Breakdown */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            Skill Breakdown
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Your expertise across categories
          </p>
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie
                data={skillData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {skillData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="flex justify-around text-sm mt-2">
            {skillData.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: item.color }}
                ></span>
                <span className="font-medium text-gray-700">{item.name}</span>
                <span className="text-gray-500">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Session Statistics */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            Session Statistics
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Your teaching & learning activity
          </p>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={sessionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Teaching" fill="#a855f7" />
              <Bar dataKey="Learning" fill="#6366f1" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* --- Skills You Should Learn Next --- */}
      <div
        className="rounded-2xl p-8 text-white"
        style={{
          background:
            "linear-gradient(135deg, #7e22ce 0%, #9333ea 40%, #a855f7 100%)",
        }}
      >
        <div className="mb-6">
          <span className="bg-white/20 text-sm font-medium px-3 py-1 rounded-full">
            ⚡ AI Recommended
          </span>
          <h2 className="text-2xl font-bold mt-3">
            Skills You Should Learn Next
          </h2>
          <p className="text-white/90 text-sm">
            Based on your profile and learning goals
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <NextSkillCard
            icon={<Brain size={24} />}
            title="Machine Learning Basics"
            desc="Expand into AI/ML to complement your development skills"
            match="92%"
          />
          <NextSkillCard
            icon={<Smartphone size={24} />}
            title="Mobile App Design"
            desc="Perfect next step for your UI/UX expertise"
            match="88%"
          />
          <NextSkillCard
            icon={<Database size={24} />}
            title="Cloud Architecture"
            desc="High demand skill that pairs well with your stack"
            match="85%"
          />
        </div>
      </div>
    </div>
  );
};

/* ----- Stat, Session, Achievement, Peer & Next Skill Cards ----- */
const StatCard = ({ icon, label, value, percent, color }) => (
  <div className="bg-white rounded-2xl shadow-sm p-6">
    <div className="flex items-center justify-between mb-3">
      <div className="bg-gray-50 p-3 rounded-lg">{icon}</div>
      <span className="text-green-500 text-sm font-medium">{percent}</span>
    </div>
    <h2 className="text-3xl font-bold text-gray-900">{value}</h2>
    <p className="text-gray-600 text-sm mb-2">{label}</p>
    <div className="w-full h-1.5 bg-gray-100 rounded-full">
      <div className={`h-1.5 ${color} rounded-full w-4/5`}></div>
    </div>
  </div>
);

const SessionCard = ({
  date,
  month,
  time,
  type,
  status,
  title,
  desc,
  teacher,
  duration,
  rating,
  students,
  action,
}) => (
  <div className="flex items-center justify-between border border-gray-100 rounded-xl p-4 mb-4 hover:shadow-md transition">
    <div className="flex flex-col items-center justify-center bg-purple-600 text-white w-16 h-20 rounded-lg">
      <span className="text-lg font-bold">{date}</span>
      <span className="text-xs uppercase">{month}</span>
      <span className="text-[10px] mt-1">{time}</span>
    </div>
    <div className="flex-1 px-4">
      <div className="flex items-center gap-2 mb-2">
        <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-0.5 rounded">
          {type}
        </span>
        <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-0.5 rounded">
          {status}
        </span>
      </div>
      <h3 className="font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-500 text-sm mb-2">{desc}</p>
      <div className="flex items-center gap-4 text-sm text-gray-500">
        <div className="flex items-center gap-2">
          <img src="https://i.pravatar.cc/30" alt="teacher" className="w-5 h-5 rounded-full" />
          {teacher}
        </div>
        <span>⏱ {duration}</span>
        {rating && (
          <span className="flex items-center gap-1">
            <Star size={14} className="text-yellow-400 fill-yellow-400" />
            {rating}
          </span>
        )}
        {students && <span>👥 {students}</span>}
      </div>
    </div>
    <div className="flex flex-col items-end gap-2">
      <button className="bg-purple-600 text-white text-sm px-4 py-1.5 rounded-lg hover:bg-purple-700 transition">
        {action}
      </button>
      <button className="text-gray-600 text-sm hover:text-gray-800 transition">
        Details
      </button>
    </div>
  </div>
);

const AchievementCard = ({ color, icon, title, desc }) => (
  <div className="flex items-center gap-3">
    <div className={`${color} w-10 h-10 rounded-lg flex items-center justify-center`}>
      <span className="text-lg">{icon}</span>
    </div>
    <div>
      <h4 className="font-semibold text-gray-800">{title}</h4>
      <p className="text-sm text-gray-500">{desc}</p>
    </div>
  </div>
);

const NextSkillCard = ({ icon, title, desc, match }) => (
  <div className="bg-white/10 rounded-xl p-5 hover:bg-white/20 transition">
    <div className="mb-3 text-white/90">{icon}</div>
    <h4 className="font-semibold text-white text-lg mb-1">{title}</h4>
    <p className="text-white/90 text-sm mb-3">{desc}</p>
    <p className="text-white font-medium text-sm mb-3">Match: {match}</p>
    <button className="bg-white text-purple-700 font-semibold text-sm px-4 py-2 rounded-md hover:bg-purple-50">
      Explore
    </button>
  </div>
);

export default DashboardContent;
