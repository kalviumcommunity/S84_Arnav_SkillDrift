import React, { useState, useRef, useEffect } from "react";
import { Bell, Mail, Search, User, LogOut } from "lucide-react";

const HeaderBar = ({ userName, setActiveContent, onLogout }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="flex items-center justify-between w-full px-8 py-5 bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-gray-200 shadow-sm sticky top-0 z-50">
      {/* Search Section */}
      <div className="flex items-center bg-white border border-blue-100 rounded-xl px-4 py-3 w-[420px] shadow-sm focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent transition-all">
        <Search size={20} className="text-blue-400 mr-3" />
        <input
          type="text"
          placeholder="Search skills, peers, or sessions..."
          className="w-full bg-transparent text-[15px] outline-none text-gray-700 placeholder-gray-400"
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6">
        {/* Skill Points */}
        <div className="flex items-center bg-indigo-50 border border-indigo-100 rounded-xl px-5 py-2 text-[15px] font-medium text-gray-800 shadow-sm hover:bg-indigo-100 transition-colors">
          <span className="text-indigo-500 mr-1.5">🔥</span>
          <span className="mr-1 text-indigo-700">Skill Points</span>
          <span className="font-semibold text-indigo-900">2,847</span>
        </div>

        {/* Notification Bell */}
        <div className="relative">
          <Bell className="text-indigo-600 cursor-pointer hover:text-indigo-800 transition-colors" size={22} />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full ring-2 ring-white"></span>
        </div>

        {/* Message Icon */}
        <div className="relative">
          <Mail className="text-indigo-600 cursor-pointer hover:text-indigo-800 transition-colors" size={22} />
          <span className="absolute -top-1 -right-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-[11px] px-1.5 rounded-full font-medium ring-2 ring-white">
            3
          </span>
        </div>

        {/* Profile Section */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center space-x-3 focus:outline-none"
          >
            <img
              src="https://i.pravatar.cc/45"
              alt="User Avatar"
              className="w-10 h-10 rounded-full border border-gray-200"
            />
            <div className="flex flex-col leading-tight text-[15px] text-left">
              <span className="font-semibold text-gray-900">{userName}</span>
              <span className="text-gray-500 text-sm">Premium Member</span>
            </div>
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {/* Dropdown */}
          {open && (
            <div className="absolute right-0 mt-3 w-44 bg-white border border-gray-200 rounded-xl shadow-lg py-2 z-50 animate-fadeIn">
              <button
                onClick={() => {
                  setActiveContent("profile");
                  setOpen(false);
                }}
                className="flex items-center gap-2 w-full px-4 py-2 text-gray-700 hover:bg-gray-50 text-sm transition"
              >
                <User size={16} /> My Profile
              </button>
              <hr className="my-1 border-gray-100" />
              <button
                onClick={() => {
                  setOpen(false);
                  onLogout();
                }}
                className="flex items-center gap-2 w-full px-4 py-2 text-red-600 hover:bg-red-50 text-sm transition"
              >
                <LogOut size={16} /> Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default HeaderBar;
