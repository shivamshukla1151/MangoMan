import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../resources/logo.svg";
import Menubar from "./Menubar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import StyledBadge from "@material-ui/core/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import "./Navbar.css";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleMenuClick = () => {
    console.log("handclick called");
    setShowMenu(!showMenu);
  };

  const product = useSelector((state) => state.cart );

  return (
    <div className="navbar">
      
      <div className="category-container">
        <li>
          <Link className="category-item" to="/allproducts">
            All
          </Link>
        </li>
        <li>
          <Link className="category-item" to="/women">
            Women
          </Link>
        </li>
        <li>
          <Link className="category-item" to="/men">
            Men
          </Link>
        </li>
      </div>
      <div className="logo-container">
        <Link to="/">
          <img className="logo" src={logo} alt="img" />
        </Link>
      </div>
      <div className="nav-items">
        <Link className="nav-item" to="/">
          <HomeOutlinedIcon />
          <h5>Home</h5>
        </Link>
        <Link className="nav-item" to="/cart">
          <StyledBadge badgeContent={product.length} color="primary">
            <ShoppingCartOutlinedIcon />
          </StyledBadge>
          <h5>Cart</h5>
        </Link>
        <span className="nav-item profile">
          <PersonOutlineOutlinedIcon onClick={handleMenuClick} />
          <h5>Profile</h5>
        </span>
      </div>
      {/* <Menubar /> */}
      {showMenu && <Menubar />}
    </div>
  );
};

export default Navbar;
