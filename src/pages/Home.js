import React from "react";
import Product from "../components/Product";
import Sidebar from "../components/Sidebar";
import "./Home.css";

export const Home = () => {
  return (
    <div className="home-container">
      <div className="heading">
        <h1>WELCOME TO THE FRADEL STORE</h1>
      </div>
      <div className="component-wrapper">
        <Sidebar />
        <Product />
      </div>
    </div>
  );
};
export default Home;
