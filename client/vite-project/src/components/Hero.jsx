import React from "react";
import SearchBar from "./SearchBar";
import Stats from "./Stats";

export default function Hero() {
  return (
    <section className="hero">
      <h1>
        Learn Skills from <span className="gradient-text">Peers</span>
      </h1>
      <p>
        Connect with skilled individuals worldwide. Learn new skills, teach what you know, and grow together in our peer-to-peer learning community.
      </p>
      <SearchBar />
      <Stats />
    </section>
  );
}
