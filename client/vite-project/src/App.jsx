// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import SignUp from "./components/SignUp";
import Login from "./components/Login";

export default function App() {
  return (
    <Router>
      <div className="font-sans">
        {/* Always‑visible navigation bar */}
        <Navbar />

        {/* App routes */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}
