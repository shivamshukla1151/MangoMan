import React from "react";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import "./MenPage.css";
import MenProduct from "../components/product/MenProduct";

const MenPage = () => {
  const [showSlider, setShowSlider] = useState(false);
  const handSlider = () => {
    setShowSlider(!showSlider);
  };
  return (
    <div className="men-container">
      r
      <div className="allProduct-container">
        <div className="spacer"></div>

        <div
          className="filter-items"
          onClick={() => {
            handSlider();
          }}
        >
          <i class="fa-solid fa-sliders"></i>
          <h5>Filter and order</h5>
        </div>
        <div className="component-wrapper">{showSlider && <Sidebar />}</div>
        <MenProduct />
      </div>
    </div>
  );
};

export default MenPage;
