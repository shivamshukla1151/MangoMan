import React, { useState } from "react";
import LandingPage from "../components/home/LandingPage";
import "./Home.css";

export const Home = () => {
  return (
    <div className="home-container">
      <div className="landing-page">
        <LandingPage />
      </div>
    </div>
  );
};
export default Home;
