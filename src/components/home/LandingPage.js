import React from "react";
import src from "../../resources/landing.mp4";
import "./LandingPage.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Typography } from "@mui/material";

const LandingPage = () => {
  return (
    <div>
      <div className="video">
        <video src={src} width="100%" height="80%" autoPlay muted loop></video>
      </div>
      <div className="pictures">
        <div className="pic1"></div>
        <div className="pic2"></div>
      </div>
      <div className="typewriter">
        <Typography className="Typewriter-heading" variant="h2">
          Fashion fades, but <br />
          style is eternal.
        </Typography>

        <div className="pic3"></div>
      </div>
      <div className="pictures">
        <div className="pic4"></div>
        <div className="pic5"></div>
        <div className="pic6"></div>
      </div>
    </div>
  );
};

export default LandingPage;
