import React from "react";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Products from "../components/product/Product";
import "./AllProducts.css";

const AllProducts = () => {
  const [showSlider, setShowSlider] = useState(false);
  const handSlider = () => {
    setShowSlider(!showSlider);
  };
  return (
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
      <Products />
    </div>
  );
};

export default AllProducts;
