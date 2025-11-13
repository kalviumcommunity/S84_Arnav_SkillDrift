  import { useState, useEffect } from "react";
  import Sidebar from "./components/Sidebar";
  import HeaderBar from "./components/HeaderBar";
  import Dashboard from "./pages/Dashboard";
  import MyProfile from "./pages/MyProfile";
  import Footer from "./components/Footer";
  import FindPeers from "./pages/FindPeers";
  import Sessions from "./pages/Sessions";
  import MySkillSessions from "./pages/MySkillSessions";
  import LearningGoals from "./pages/LearningGoals";
  import SkillCircles from "./pages/SkillCircles";
  import ComingSoon from "./components/ComingSoon";
  import Signup from "./pages/Signup";

  export default function App() {
    // ✅ Login & user info state
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [activePage, setActivePage] = useState("dashboard");

    // ✅ Load saved login info when app starts
    useEffect(() => {
      const storedLogin = localStorage.getItem("isLoggedIn");
      const storedName = localStorage.getItem("userName");
      const storedEmail = localStorage.getItem("userEmail");

      if (storedLogin === "true" && (storedName || storedEmail)) {
        setIsLoggedIn(true);
        setUserName(storedName || "Guest User");
        setUserEmail(storedEmail || "user@skildrift.com");
      }
    }, []);

    // ✅ When login/signup succeeds
    const handleLoginSuccess = (name, email) => {
      const finalName = name || "Guest User";
      const finalEmail = email || "user@skildrift.com";

      setUserName(finalName);
      setUserEmail(finalEmail);
      setIsLoggedIn(true);

      // Save to localStorage
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userName", finalName);
      localStorage.setItem("userEmail", finalEmail);
    };

    // ✅ Logout — clears everything
    const handleLogout = () => {
      setIsLoggedIn(false);
      setUserName("");
      setUserEmail("");
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("userName");
      localStorage.removeItem("userEmail");
    };

    // ✅ Show Signup/Login if not logged in
    if (!isLoggedIn) {
      return <Signup onSignup={handleLoginSuccess} />;
    }

    // ✅ Dashboard Layout (persistent)
    return (
      <div className="flex bg-gray-50 min-h-screen overflow-hidden">
        {/* Sidebar */}
        <aside className="fixed left-0 top-0 h-screen w-64 bg-white border-r border-gray-200 shadow-sm z-50">
          <Sidebar setActivePage={setActivePage} activePage={activePage} />
        </aside>

        {/* Right Section */}
        <div className="ml-64 flex flex-col flex-1 min-h-screen">
          {/* Header */}
          <header className="fixed top-0 left-64 right-0 z-40">
            <HeaderBar
              userName={userName}
              setActivePage={setActivePage}
              onLogout={handleLogout}
            />
          </header>

          {/* Main Content */}
          <main className="flex flex-col flex-grow pt-[84px] overflow-y-auto">
            <div className="flex-grow p-8 pb-0">
              {activePage === "dashboard" && (
                <Dashboard userName={userName} userEmail={userEmail} />
              )}
              {activePage === "profile" && (
                <MyProfile userName={userName} userEmail={userEmail} />
              )}
              {activePage === "peers" && <FindPeers />}
              {activePage === "sessions" && <Sessions />}
              {activePage === "myskills" && <MySkillSessions />}
              {activePage === "learninggoals" && <LearningGoals />}
              {activePage === "skillcircles" && <SkillCircles />}
              {[
                "progresstracker",
                "feedback",
                "leaderboard",
                "achievements",
                "preferences",
                "notifications",
              ].includes(activePage) && (
                <ComingSoon
                  title="Feature Coming Soon 🚀"
                  message="We’re working hard to bring this section to life. Check back soon!"
                />
              )}
            </div>

            {/* Footer */}
            <footer className="border-t border-gray-200 bg-white">
              <Footer />
            </footer>
          </main>
        </div>
      </div>
    );
  }
