import React from "react";
import { Rocket, Bell } from "lucide-react";

export default function ComingSoon({ title = "Coming Soon", message = "This feature is currently under development. Stay tuned for updates!" }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl shadow-sm p-10">
      {/* Icon Section */}
      <div className="bg-gradient-to-br from-purple-500 to-indigo-500 w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg mb-6">
        <Rocket className="w-10 h-10 text-white" />
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold text-gray-900 mb-2">{title}</h1>
      <p className="text-lg text-gray-500 mb-8 max-w-2xl">{message}</p>

      {/* Notify Button */}
      <button className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg transition-all shadow-md">
        <Bell size={20} /> Notify Me
      </button>

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-10 left-20 w-56 h-56 bg-purple-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-24 w-64 h-64 bg-indigo-400 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
}
