import React from "react";
import {
  BarChart3,
  User,
  Users,
  Calendar,
  BookOpen,
  Target,
  Navigation,
  TrendingUp,
  MessageSquare,
  Trophy,
  Award,
  Settings,
  Bell,
  Crown,
} from "lucide-react";

export default function Sidebar({ setActivePage, activePage }) {
  const mainMenu = [
    { key: "dashboard", label: "Dashboard", icon: BarChart3, badge: "12" },
    { key: "profile", label: "My Profile", icon: User },
    {
      key: "peers",
      label: "Find Peers",
      icon: Users,
      extra: "234 Online",
      extraColor: "text-green-600",
    },
    {
      key: "sessions",
      label: "Sessions",
      icon: Calendar,
      badge: "5",
      badgeColor: "bg-orange-500",
    },
  ];

  const learningMenu = [
    { icon: BookOpen, label: "My Skills", page: "myskills" },
    { icon: Target, label: "Learning Goals", page: "learninggoals" },
    {
      icon: Navigation,
      label: "Skill Circles",
      page: "skillcircles",
      badge: "NEW",
      badgeColor: "bg-purple-600 text-white font-bold",
    },
    { icon: TrendingUp, label: "Progress Tracker", page: "progresstracker" },
  ];

  const communityMenu = [
    { icon: MessageSquare, label: "Feedback Wall", page: "feedback" },
    { icon: Trophy, label: "Leaderboard", page: "leaderboard" },
    { icon: Award, label: "Achievements", page: "achievements" },
  ];

  const settingsMenu = [
    { icon: Settings, label: "Preferences", page: "preferences" },
    { icon: Bell, label: "Notifications", page: "notifications" },
  ];

  // 🔹 Shared button classes for DRY code
  const baseBtn =
    "w-full text-left p-3 rounded-lg flex items-center gap-3 mb-1 transition-all duration-150";
  const activeBtn =
    "bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-md";
  const inactiveBtn = "text-gray-700 hover:bg-gray-50";

  return (
    <div className="w-64 h-screen bg-white border-r border-gray-200 flex flex-col overflow-hidden">
      {/* Logo Section */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl flex items-center justify-center">
            <Trophy className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="font-bold text-xl text-gray-900">SkillDrift</h1>
            <p className="text-xs text-gray-500">Peer Learning Hub</p>
          </div>
        </div>
      </div>

      {/* Navigation Scrollable Area */}
      <div className="flex-1 overflow-y-auto">
        <nav className="p-3">
          {/* MAIN SECTION */}
          {mainMenu.map(
            ({
              key,
              label,
              icon: Icon,
              badge,
              badgeColor,
              extra,
              extraColor,
            }) => (
              <button
                key={key}
                onClick={() => setActivePage(key)}
                className={`${baseBtn} ${
                  activePage === key ? activeBtn : inactiveBtn
                }`}
              >
                <Icon
                  className={`w-5 h-5 ${
                    activePage === key ? "text-white" : "text-gray-600"
                  }`}
                />
                <span className="flex-1 font-medium">{label}</span>

                {extra && (
                  <span
                    className={`text-xs font-semibold ${
                      extraColor || "text-gray-500"
                    }`}
                  >
                    {extra}
                  </span>
                )}
                {badge && (
                  <span
                    className={`${
                      badgeColor || "bg-white/20"
                    } text-xs px-2 py-0.5 rounded-full font-medium ${
                      activePage === key
                        ? "text-white"
                        : "text-gray-800 bg-gray-100"
                    }`}
                  >
                    {badge}
                  </span>
                )}
              </button>
            )
          )}

          {/* LEARNING SECTION */}
          <SectionTitle title="LEARNING" />
          {learningMenu.map(
            ({ icon: Icon, label, badge, badgeColor, page }, i) => (
              <button
                key={i}
                onClick={() => setActivePage(page)}
                className={`${baseBtn} ${
                  activePage === page ? activeBtn : inactiveBtn
                }`}
              >
                <Icon
                  className={`w-5 h-5 ${
                    activePage === page ? "text-white" : "text-gray-600"
                  }`}
                />
                <span className="flex-1 font-medium">{label}</span>

                {badge && (
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${badgeColor}`}
                  >
                    {badge}
                  </span>
                )}
              </button>
            )
          )}

          {/* COMMUNITY SECTION */}
          <SectionTitle title="COMMUNITY" />
          {communityMenu.map(({ icon: Icon, label, page }, i) => (
            <button
              key={i}
              onClick={() => setActivePage(page)}
              className={`${baseBtn} ${
                activePage === page ? activeBtn : inactiveBtn
              }`}
            >
              <Icon
                className={`w-5 h-5 ${
                  activePage === page ? "text-white" : "text-gray-600"
                }`}
              />
              <span className="flex-1 font-medium">{label}</span>
            </button>
          ))}

          {/* SETTINGS SECTION */}
          <SectionTitle title="SETTINGS" />
          {settingsMenu.map(({ icon: Icon, label, page }, i) => (
            <button
              key={i}
              onClick={() => setActivePage(page)}
              className={`${baseBtn} ${
                activePage === page ? activeBtn : inactiveBtn
              }`}
            >
              <Icon
                className={`w-5 h-5 ${
                  activePage === page ? "text-white" : "text-gray-600"
                }`}
              />
              <span className="flex-1 font-medium">{label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Upgrade Card */}
      <div className="p-3 border-t border-gray-100">
        <div className="bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 rounded-xl p-5 text-white relative overflow-hidden">
          {/* Background Orbs */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500 rounded-full opacity-20 translate-x-8 -translate-y-8"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-800 rounded-full opacity-20 -translate-x-6 translate-y-6"></div>

          <div className="relative z-10">
            <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center mb-3">
              <Crown className="w-6 h-6 text-yellow-700" />
            </div>
            <h3 className="font-bold text-lg mb-1">Upgrade to Pro</h3>
            <p className="text-xs text-purple-100 mb-4 leading-relaxed">
              Unlock unlimited sessions & premium features
            </p>
            <button
  onClick={() => setShowDialog(true)}
  className="relative w-full bg-gradient-to-r from-yellow-400 to-yellow-300 text-purple-800 font-semibold py-2.5 px-4 rounded-lg text-sm shadow-md hover:scale-[1.03] hover:shadow-lg transition-transform duration-200"
>
  <span className="relative z-10 flex items-center justify-center gap-2">
    <Crown className="w-4 h-4 text-purple-800" />
    Upgrade Now
  </span>
  {/* subtle overlay animation */}
  <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-600/0 via-purple-600/10 to-purple-600/0 opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
</button>
          
          </div>
        </div>
      </div>
    </div>
  );
}

/* Sub Component for Section Headings */
const SectionTitle = ({ title }) => (
  <div className="text-xs font-bold text-gray-400 mb-3 mt-4 px-3 tracking-wider">
    {title}
  </div>
);
