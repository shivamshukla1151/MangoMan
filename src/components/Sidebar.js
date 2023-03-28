import React, { useState } from "react";
import "./Sidebar.css";

const Sidebar = () => {
  const [checked, setChecked] = useState();
  return (
    <div className="container">
      <div className="Slidebar-Header">
        <h2>Category</h2>
      </div>
      <div>
        <h3>Clothing</h3>
      </div>
      <div className="category">
        <div className="label">
          <input type="checkbox" value={checked} id="1" />
          <label for="1">T-Shirt</label>
        </div>
        <div className="label">
          <input type="checkbox" value={checked} id="2" />
          <label for="2">Shirts</label>
        </div>
        <div className="label">
          <input type="checkbox" value={checked} id="3" />
          <label for="3">Jackets</label>
        </div>
      </div>

      <div>
        <h3>Footwear</h3>
      </div>
      <div className="category">
        <div className="label">
          <input type="checkbox" value={checked} id="1" />
          <label for="1">Loafers</label>
        </div>
        <div className="label">
          <input type="checkbox" value={checked} id="2" />
          <label for="2">Sneaker</label>
        </div>
        <div className="label">
          <input type="checkbox" value={checked} id="3" />
          <label for="3">Boots</label>
        </div>
      </div>
      <div>
        <h3>Ascessery</h3>
      </div>
      <div className="category">
        <div className="label">
          <input type="checkbox" value={checked} id="1" />
          <label for="1">Wallet</label>
        </div>
        <div className="label">
          <input type="checkbox" value={checked} id="2" />
          <label for="2">Hat</label>
        </div>
        <div className="label">
          <input type="checkbox" value={checked} id="3" />
          <label for="3">Belts</label>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
