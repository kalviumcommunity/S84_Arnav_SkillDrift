import React, { useState } from "react";
import {
  Calendar,
  Video,
  Clock,
  User,
  Star,
  CheckCircle,
  XCircle,
  RefreshCw,
} from "lucide-react";

export default function Sessions() {
  const [activeTab, setActiveTab] = useState("upcoming");

  const upcoming = [
    {
      id: 1,
      type: "Teaching",
      peer: "Jessica Lee",
      topic: "Building Scalable MERN Apps",
      date: "Nov 15, 2025",
      time: "6:00 PM",
      duration: "1 hr",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      status: "Scheduled",
    },
    {
      id: 2,
      type: "Learning",
      peer: "Michael Torres",
      topic: "Intro to TensorFlow & Machine Learning",
      date: "Nov 17, 2025",
      time: "7:30 PM",
      duration: "1 hr",
      avatar: "https://randomuser.me/api/portraits/men/52.jpg",
      status: "Scheduled",
    },
  ];

  const past = [
    {
      id: 3,
      peer: "Sophia Kim",
      topic: "Figma Prototyping for Beginners",
      date: "Nov 10, 2025",
      time: "8:00 PM",
      rating: 5,
      feedback: "Super helpful session! Learned a lot about UX wireframing.",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 4,
      peer: "Daniel Park",
      topic: "Advanced React State Management",
      date: "Nov 8, 2025",
      time: "5:00 PM",
      rating: 4,
      feedback: "Great hands-on session with Redux Toolkit examples!",
      avatar: "https://randomuser.me/api/portraits/men/31.jpg",
    },
  ];

  const getTabData = () => {
    switch (activeTab) {
      case "upcoming":
        return upcoming;
      case "past":
        return past;
      default:
        return [];
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Sessions</h1>
          <p className="text-gray-500 mt-1">
            Manage your learning and teaching sessions here.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex bg-gray-100 rounded-lg p-1">
          {["upcoming", "past"].map((tab) => (
            <button
              key={tab}
              className={`px-5 py-2 rounded-md font-medium capitalize transition-all ${
                activeTab === tab
                  ? "bg-white text-purple-600 shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {getTabData().map((session) => (
          <SessionCard
            key={session.id}
            session={session}
            type={activeTab}
          />
        ))}
      </div>

      {/* Empty state */}
      {getTabData().length === 0 && (
        <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-10 text-center">
          <Calendar className="w-10 h-10 mx-auto text-gray-400 mb-4" />
          <h3 className="text-lg font-semibold text-gray-700">
            No sessions found
          </h3>
          <p className="text-gray-500 mt-1">
            Once you schedule or complete sessions, they’ll appear here.
          </p>
        </div>
      )}
    </div>
  );
}

/* -------------------- Session Card -------------------- */

const SessionCard = ({ session, type }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-4">
          <img
            src={session.avatar}
            alt={session.peer}
            className="w-14 h-14 rounded-full object-cover border-2 border-gray-100"
          />
          <div>
            <h3 className="font-semibold text-lg text-gray-900">
              {session.peer}
            </h3>
            <p className="text-sm text-gray-500">{session.topic}</p>
          </div>
        </div>

        {type === "upcoming" && (
          <span className="bg-purple-100 text-purple-700 text-xs font-medium px-3 py-1 rounded-full">
            {session.type}
          </span>
        )}
      </div>

      {/* Details */}
      {type === "upcoming" ? (
        <div className="space-y-4">
          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            <span className="flex items-center gap-1">
              <Calendar size={16} /> {session.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={16} /> {session.time}
            </span>
            <span className="flex items-center gap-1">
              <Video size={16} /> {session.duration}
            </span>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <button className="flex-1 bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition">
              Join Session
            </button>
            <button className="flex-1 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition">
              Reschedule
            </button>
          </div>
        </div>
      ) : (
        <div className="pt-2">
          <div className="flex items-center gap-2 text-yellow-500 mb-2">
            {[...Array(session.rating)].map((_, i) => (
              <Star key={i} size={16} fill="currentColor" />
            ))}
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            “{session.feedback}”
          </p>

          <div className="flex items-center gap-3 mt-4">
            <button className="flex-1 bg-purple-50 text-purple-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-100 transition flex items-center justify-center gap-2">
              <RefreshCw size={14} /> Rebook
            </button>
            <button className="flex-1 bg-gray-50 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition flex items-center justify-center gap-2">
              <CheckCircle size={14} /> View Summary
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
