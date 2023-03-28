import React from "react";
import "./Menubar.css";

const Menubar = () => {
  console.log("menubar is called");
  return (
    <div className="menu-container">

      <div className="menu-item">
        <span className="menu-span">
          <i class="fa-regular fa-user"></i>
          <li className="menu-container-item">Profile</li>
          <div className="angle-right">
            <i class="fa-solid fa-angle-right"></i>
          </div>
        </span>
      </div>

      <div className="menu-item">
        <span className="menu-span">
          <i class="fa-regular fa-heart"></i>
          <li className="menu-container-item">Liked</li>
          <div className="angle-right">
            <i class="fa-solid fa-angle-right"></i>
          </div>
        </span>
      </div>

      <div className="menu-item">
        <span className="menu-span">
          <i class="fa-solid fa-right-from-bracket"></i>
          <li className="menu-container-item">Logout</li>
          <div className="angle-right">
            <i class="fa-solid fa-angle-right"></i>
          </div>
        </span>
        
      </div>
    </div>
  );
};

export default Menubar;
