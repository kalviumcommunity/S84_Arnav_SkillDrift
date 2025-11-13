import React from "react";
import { Twitter, Linkedin, Github , Crown } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-gradient-to-t from-gray-50 to-white mt-10">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-600">
        {/* Left Section - Logo + Links */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-purple-600 text-white p-2 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 3.5L5.5 14.5l4.25-1.5 1.75 6 5.25-11.5-4.25 1.5-1.75-6z"
                />
              </svg>
            </div>
            <span className="font-semibold text-gray-900 text-base">
              SkillDrift
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="flex items-center gap-5 text-gray-600">
            <a href="#" className="hover:text-purple-600 transition">
              About
            </a>
            <a href="#" className="hover:text-purple-600 transition">
              Help Center
            </a>
            <a href="#" className="hover:text-purple-600 transition">
              Terms
            </a>
            <a href="#" className="hover:text-purple-600 transition">
              Privacy
            </a>
          </nav>
        </div>

        {/* Right Section - Social + Copyright */}
        <div className="flex items-center gap-4 mt-4 sm:mt-0">
          <p className="text-gray-500 text-sm hidden sm:block">
            © 2025 <span className="font-medium text-gray-800">SkillDrift.</span>{" "}
            All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-gray-500">
            <a
              href="https://x.com/Arnav0124336408"
              className="hover:text-purple-600 transition"
              aria-label="Twitter"
            >
              <Twitter size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/arnav-verma-46b788360/"
              className="hover:text-purple-600 transition"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://github.com/Arnav301"
              className="hover:text-purple-600 transition"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Copyright Line */}
      <div className="text-center text-gray-500 text-sm py-2 sm:hidden border-t border-gray-100">
        © 2025 SkillDrift. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
