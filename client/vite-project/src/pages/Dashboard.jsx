import React from "react";
import { Video, Users } from "lucide-react";
import DashboardContent from "../components/DashboardContent";

const Dashboard = ({ userName }) => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Hero Gradient Section */}
      <div
        className="relative rounded-3xl p-10 shadow-md text-white overflow-hidden"
        style={{
          background:
            "linear-gradient(90deg, #4f46e5 0%, #9333ea 50%, #ec4899 100%)",
        }}
      >
        {/* Decorative Rocket Shape */}
        <div className="absolute right-10 top-10 opacity-20">
          <div className="relative w-60 h-60 bg-white/20 rounded-2xl flex items-center justify-center">
            <div className="absolute inset-0 bg-white/20 rounded-2xl transform rotate-6"></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#fff"
              opacity="0.8"
              viewBox="0 0 24 24"
              className="w-16 h-16 relative z-10"
            >
              <path d="M14 2C9.582 2 6 5.582 6 10v.293c-2.757 1.056-4 3.904-4 6.707h3.182L7 14h2v3h3v-3h2l1.818 3H19c0-5.523-2.372-10.844-5-15zM9 21h6v1H9z" />
            </svg>
          </div>
        </div>

        {/* Main Text Section */}
        <div className="relative z-10 max-w-xl">
          {/* Badges */}
          <div className="flex items-center space-x-3 mb-5">
            <span className="bg-white/20 text-white text-sm font-medium px-4 py-1.5 rounded-full">
              👋 Welcome Back, {userName || "Learner"}!
            </span>
            <span className="bg-yellow-400 text-gray-900 text-sm font-medium px-4 py-1.5 rounded-full flex items-center gap-1">
              🔥 5 Day Streak
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Ready to Learn & Teach Today?
          </h1>
          <p className="text-white/90 text-base md:text-lg mb-6">
            You have <span className="font-semibold">3 upcoming sessions</span> and{" "}
            <span className="font-semibold">5 new peer matches</span> waiting for you!
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="bg-white text-blue-600 font-semibold px-5 py-2.5 rounded-lg shadow-md hover:bg-blue-50 transition flex items-center gap-2">
              <Video size={18} /> Schedule Session
            </button>
            <button className="bg-white/20 text-white font-semibold px-5 py-2.5 rounded-lg shadow-md hover:bg-white/30 transition flex items-center gap-2">
              <Users size={18} /> Browse Peers
            </button>
          </div>
        </div>
      </div>

      {/* Dashboard Content */}
      <DashboardContent />
    </div>
  );
};

export default Dashboard;
