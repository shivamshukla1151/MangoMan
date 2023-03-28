import React from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PinterestIcon from "@mui/icons-material/Pinterest";
import FacebookIcon from "@mui/icons-material/Facebook";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import "../components/Footer.css";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-heading">
        <Typography variant="OVERLINE TEXT">Join Our News Letter</Typography>
      </div>
      <div className="form">
        <input type="email" placeholder="E-MAIL" className="email" />
        {/* <SendOutlinedIcon fontSize="small" /> */}
      </div>
      <div className="social-media">
        <InstagramIcon />
        <TwitterIcon />
        <YouTubeIcon />
        <PinterestIcon />
        <FacebookIcon />
      </div>
    </div>
  );
};

export default Footer;
