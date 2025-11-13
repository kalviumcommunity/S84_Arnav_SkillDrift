import React, { useState, useEffect } from "react";
import { Eye, EyeOff, User, Mail, Lock, ArrowRight, Sparkles, BookOpen, Rocket, LogIn } from "lucide-react";

export default function Signup({ onSignup }) {
  const [showPassword, setShowPassword] = useState(false);
  const [formMode, setFormMode] = useState("signup"); // 'signup' | 'login'
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const quotes = [
    { text: "“Learning never exhausts the mind.”", author: "– Leonardo da Vinci" },
    { text: "“An investment in knowledge pays the best interest.”", author: "– Benjamin Franklin" },
    { text: "“The beautiful thing about learning is that no one can take it away from you.”", author: "– B.B. King" },
  ];
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password || (formMode === "signup" && !formData.name)) {
      alert("Please fill out all fields.");
      return;
    }

    // Simulate successful auth
    setTimeout(() => {
      onSignup(formData.name , formData.email); 
    }, 700);
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row overflow-hidden bg-gray-50">
      {/* === LEFT HERO SECTION === */}
      <div className="relative flex-1 flex flex-col justify-center items-center text-white px-10 py-16 overflow-hidden bg-gradient-to-br from-purple-700 via-indigo-600 to-purple-500">
        {/* Glows */}
        <div className="absolute w-[500px] h-[500px] bg-purple-400/30 blur-[180px] rounded-full top-16 left-16 animate-float-slow"></div>
        <div className="absolute w-[400px] h-[400px] bg-pink-400/20 blur-[200px] rounded-full bottom-10 right-20 animate-float-slower"></div>

        {/* Floating Icons */}
        <BookOpen className="absolute top-32 left-24 text-pink-300 opacity-70 w-10 h-10 animate-float-slower" />
        <Rocket className="absolute bottom-24 right-28 text-yellow-300 opacity-80 w-12 h-12 animate-bounce-slow" />
        <Sparkles className="absolute top-20 right-36 text-indigo-200 opacity-70 w-8 h-8 animate-bounce-slower" />

        {/* Main Illustration */}
        <img
          src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
          alt="Learning rocket"
          className="w-36 mb-6 drop-shadow-xl animate-float-slow"
        />

        <h1 className="text-4xl lg:text-5xl font-extrabold text-center leading-tight drop-shadow-sm z-10">
          Your <span className="text-yellow-300">Learning Universe</span> Awaits
        </h1>

        <div className="mt-6 text-center max-w-lg">
          <p
            key={quoteIndex}
            className="text-lg italic text-purple-100 leading-relaxed transition-opacity duration-700 ease-in-out"
          >
            {quotes[quoteIndex].text}
          </p>
          <p className="text-sm text-purple-200 mt-2">{quotes[quoteIndex].author}</p>
        </div>
      </div>

      {/* === RIGHT FORM SECTION === */}
      <div className="flex-1 flex items-center justify-center p-8 bg-gradient-to-br from-white via-purple-50 to-pink-50 relative overflow-hidden">
        <div className="absolute top-10 right-10 w-20 h-20 bg-purple-100 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-pink-100 rounded-full blur-2xl"></div>

        {/* === Animated Form Container === */}
        <div
          className={`bg-white border border-gray-100 shadow-xl rounded-2xl w-full max-w-md p-8 z-10 relative transition-all duration-700 ease-in-out transform ${
            formMode === "login" ? "-translate-x-[60px] opacity-90" : "translate-x-0 opacity-100"
          }`}
        >
          {/* Header */}
          <div className="text-center mb-6">
            <h3 className="text-sm uppercase text-purple-500 font-semibold tracking-wide">
              {formMode === "signup" ? "🌟 Begin Your Journey" : "👋 Welcome Back"}
            </h3>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">
              {formMode === "signup" ? "Create Your Account" : "Sign In to SkillDrift"}
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              {formMode === "signup"
                ? "Join SkillDrift and explore, learn, and teach with others."
                : "Continue your learning adventure and connect with peers."}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {formMode === "signup" && (
              <div className="relative">
                <User className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full pl-10 pr-3 py-2.5 rounded-lg border border-gray-200 text-gray-700 text-sm bg-white/60 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition"
                />
              </div>
            )}

            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full pl-10 pr-3 py-2.5 rounded-lg border border-gray-200 text-gray-700 text-sm bg-white/60 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition"
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full pl-10 pr-10 py-2.5 rounded-lg border border-gray-200 text-gray-700 text-sm bg-white/60 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-400 hover:text-purple-500"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-semibold py-2.5 rounded-lg text-sm shadow-md hover:shadow-lg transition-transform hover:scale-[1.02] flex items-center justify-center gap-2"
            >
              {formMode === "signup" ? (
                <>
                  Sign Up <ArrowRight size={16} />
                </>
              ) : (
                <>
                  Sign In <LogIn size={16} />
                </>
              )}
            </button>

            {/* Switch Mode */}
            <p className="text-center text-xs text-gray-500 mt-4">
              {formMode === "signup" ? "Already have an account?" : "Don’t have an account?"}{" "}
              <button
                type="button"
                onClick={() => setFormMode(formMode === "signup" ? "login" : "signup")}
                className="text-purple-600 font-medium hover:underline transition-colors"
              >
                {formMode === "signup" ? "Sign In" : "Sign Up"}
              </button>
            </p>

            {formMode === "signup" && (
              <p className="text-center text-[11px] text-gray-400 mt-2 italic">
                “Join the movement — where learners become teachers, and teachers never stop learning.”
              </p>
            )}
          </form>
        </div>
      </div>

      {/* === Animations === */}
      <style>{`
        @keyframes float-slow { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-15px); } }
        @keyframes float-slower { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
        @keyframes bounce-slow { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        @keyframes bounce-slower { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
        .animate-float-slow { animation: float-slow 12s ease-in-out infinite; }
        .animate-float-slower { animation: float-slower 16s ease-in-out infinite; }
        .animate-bounce-slow { animation: bounce-slow 6s ease-in-out infinite; }
        .animate-bounce-slower { animation: bounce-slower 9s ease-in-out infinite; }
      `}</style>
    </div>
  );
}
