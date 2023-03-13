import React from "react";
import { Link } from "react-router-dom";
import logo from "../resources/logo.png";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo-container">
        <img className="logo" src={logo} alt="img" />
      </span>
      <div className="nav-items">
        <Link className="nav-item" to="/">
          Home
        </Link>
        <Link className="nav-item" to="/cart">
          Cart
        </Link>
        <span className="nav-item total">
          <i class="fa-solid fa-cart-shopping"></i>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
