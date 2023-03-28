import React from "react";
import "./WomenPage.css";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import WomenProduct from "../components/product/WomenProduct";
const WomenPage = () => {
  const [showSlider, setShowSlider] = useState(false);
  const handSlider = () => {
    setShowSlider(!showSlider);
  };
  return (
    <div className="women-container">
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
        <WomenProduct />
      </div>
    </div>
  );
};

export default WomenPage;
