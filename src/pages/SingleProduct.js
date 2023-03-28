import { Typography } from "@mui/material";
import "./SingleProduct.css";
import React from "react";
import src from "../resources/man4.jpeg";

const SingleProduct = () => {
  return (
    <div className="singleProduct-wrapper">
      <div className="spacer">This is spacec</div>
      <div className="singleProduct-card">
        <div className="product-detail">
          <div className="detail-wrapper">
            <Typography variant="h2" fontSize={12}>
              COMPOSITION, CARE & ORIGIN
            </Typography>
            <br />

            <Typography variant="h2" fontSize={12}>
              COMPOSITON
              <br />
              <br />
            </Typography>

            <Typography variant="body" fontSize={12}>
              We work with monitoring programmes to ensure compliance with our
              social, environmental and health and safety standards for our
              garments.
              <br />
              <br />
              To assess compliance, we have developed a programme of audits and
              continuous improvement plans. <br />
              <br />
            </Typography>
            <Typography variant="h2" fontSize={12}>
              OUTER SHELL
              <br />
              100% Cotton <br />
              <br />
              <br />
            </Typography>
            <Typography variant="h2" fontSize={12}>
              CARE
              <br />
              <br />
            </Typography>

            <Typography variant="body" fontSize={12}>
              Caring for your clothes is caring for the environment.
              <br />
              <br />
              To lengthen the life of denim garments, always turn them inside
              out and wash at low temperatures. This will help you preserve
              their colours and the structure of the fabric, as well as reduce
              energy consumption. <br />
              <br />
            </Typography>
            <Typography variant="h2" fontSize={12}>
              ORIGIN
              <br />
              <br />
            </Typography>
            <Typography variant="body" fontSize={12}>
              We work with our suppliers, workers, unions and international
              organizations to develop a supply chain in which human rights are
              respected and promoted, contributing to the United Nations
              Sustainable Development Goals.
              <br />
              <br />
            </Typography>
            <Typography variant="body" fontSize={12}>
              Thanks to the collaboration with our suppliers, we work to know
              the facilities and processes used to manufacture our garments in
              order to know the traceability of our products.
            </Typography>
          </div>
        </div>
        <div className="product-image">
          <img src={src} className="prod-img" />
          <img src={src} className="prod-img" />
          <img src={src} className="prod-img" />
        </div>
        {/* </Slider> */}

        <div className="product-pricing"></div>
      </div>
    </div>
  );
};

export default SingleProduct;
