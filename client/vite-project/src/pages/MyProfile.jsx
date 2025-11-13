import React from "react";
import {
  Camera,
  Edit2,
  MapPin,
  Mail,
  Phone,
  Award,
  Star,
  Users,
  Zap,
} from "lucide-react";

/* --- Move helper icons ABOVE the component --- */
const TargetIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="w-6 h-6 text-purple-600"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 3v1.5m6.364 1.136l-1.06 1.06m3.182 4.304H21M4.5 12H3m1.136-6.364l1.06 1.06M12 20.5V21m-6.364-1.136l1.06-1.06M12 9a3 3 0 103 3h-3V9z"
    />
  </svg>
);

const BookOpenIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="w-6 h-6 text-blue-500"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 6.5c-1.104 0-2 .896-2 2v11.5a1.5 1.5 0 01-1.5-1.5V8.5a3 3 0 013-3h7.5a1.5 1.5 0 011.5 1.5V19a1.5 1.5 0 01-1.5 1.5H14"
    />
  </svg>
);

export default function MyProfile({ userName, userEmail }) {
  return (
    <div className="space-y-12">
      {/* --- Header Card --- */}
      <div className="relative rounded-3xl overflow-hidden shadow-lg">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400"></div>
        <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px]"></div>

        <div className="relative p-10 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="relative">
              <img
                src="https://i.pravatar.cc/150?img=12"
                alt="Profile"
                className="w-36 h-36 rounded-full border-4 border-white shadow-xl object-cover"
              />
              <button className="absolute bottom-0 right-0 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition">
                <Camera size={18} className="text-gray-700" />
              </button>
            </div>

            <div>
              <h1 className="text-3xl font-extrabold text-white mb-2">
                {userName}
              </h1>
              <p className="text-purple-100 text-lg mb-3">
                Full Stack Developer
              </p>
              <div className="flex flex-wrap gap-4 text-base text-white/90">
                <span className="flex items-center gap-1">
                  <MapPin size={18} /> Himachal Pradesh, India
                </span>
                <span className="flex items-center gap-1">
                  <Mail size={18} /> {userEmail}
                </span>
                <span className="flex items-center gap-1">
                  <Phone size={18} /> +91-8360336699
                </span>
              </div>
            </div>
          </div>

          <button className="mt-8 md:mt-0 bg-white text-purple-600 font-semibold px-6 py-3 rounded-xl text-base shadow-lg hover:bg-purple-50 transition flex items-center gap-3">
            <Edit2 size={18} /> Edit Profile
          </button>
        </div>
      </div>

      {/* --- Stats Section --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <StatCard
          icon={<Award size={26} className="text-yellow-500" />}
          label="Skill Points"
          value="2,847"
          desc="Keep learning to level up!"
        />
        <StatCard
          icon={<Star size={26} className="text-green-500" />}
          label="Sessions Completed"
          value="142"
          desc="You’re consistent and growing!"
        />
        <StatCard
          icon={<Users size={26} className="text-orange-500" />}
          label="Peers Connected"
          value="56"
          desc="Strong learning network!"
        />
      </div>

      {/* --- About --- */}
      <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-3">
          <Zap size={22} className="text-purple-600" />
          About Me
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          I’m a passionate full-stack developer focused on building efficient,
          scalable, and visually stunning web applications. Currently pursuing
          my studies at{" "}
          <b>Chitkara University, Himachal Pradesh</b>, I enjoy working with
          modern technologies like React, Node.js, and Express to create
          impactful digital experiences.
        </p>
      </div>

      {/* --- Skills --- */}
      <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
          <Star size={22} className="text-purple-600" />
          My Skills
        </h2>
        <div className="flex flex-wrap gap-4">
          {[
            "Java",
            "Python",
            "React.js",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Tailwind CSS",
            "Git",
          ].map((skill, i) => (
            <span
              key={i}
              className="px-5 py-2.5 bg-purple-50 text-purple-700 font-medium text-base rounded-full border border-purple-100 hover:bg-purple-600 hover:text-white transition transform hover:-translate-y-0.5"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* --- Goals --- */}
      <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-3">
          <TargetIcon /> Learning Goals
        </h2>
        <ul className="list-disc list-inside text-gray-600 text-lg space-y-2 ml-3">
          <li>Master advanced React concepts and state management</li>
          <li>Contribute to open-source MERN stack projects</li>
          <li>Explore cloud computing and deployment (AWS, Render)</li>
        </ul>
      </div>

      {/* --- Activity Timeline --- */}
      <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Recent Activity
        </h2>
        <div className="space-y-6">
          <ActivityItem
            icon={<BookOpenIcon />}
            text="Completed a session on React Component Optimization"
            date="Nov 10, 2025"
          />
          <ActivityItem
            icon={<Users size={18} className="text-purple-500" />}
            text="Connected with Jessica Lee (Full Stack Developer)"
            date="Nov 08, 2025"
          />
          <ActivityItem
            icon={<Award size={18} className="text-yellow-500" />}
            text="Earned 50 Skill Points for completing 2 teaching sessions"
            date="Nov 06, 2025"
          />
        </div>
      </div>
    </div>
  );
}

/* --- Subcomponents --- */
const StatCard = ({ icon, label, value, desc }) => (
  <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition transform hover:-translate-y-1">
    <div className="flex items-center justify-between mb-4">
      <div className="bg-purple-50 p-3.5 rounded-xl">{icon}</div>
    </div>
    <h3 className="text-4xl font-bold text-gray-900 mb-1">{value}</h3>
    <p className="text-gray-700 text-lg font-medium">{label}</p>
    <p className="text-gray-400 text-base mt-2">{desc}</p>
  </div>
);

const ActivityItem = ({ icon, text, date }) => (
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-4">
      <div className="bg-purple-100 p-3 rounded-xl">{icon}</div>
      <p className="text-gray-700 text-lg">{text}</p>
    </div>
    <span className="text-gray-400 text-sm">{date}</span>
  </div>
);
