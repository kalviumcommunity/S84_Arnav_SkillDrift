import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ExploreCategories from "./components/ExploreCategories";
import "./App.css"; // Importing the CSS file for styling

export default function App() {
  return (
    <>
      <Navbar />
      
      <Hero />
      <ExploreCategories />
    </>
  );
}
