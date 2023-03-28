import React from "react";
import { useSelector } from "react-redux";
import "./WomenProduct.css";

const WomenProduct = () => {
  const { data: products } = useSelector((state) => state.product);
  console.log("Inside Product", products);
  console.log(
    products.filter((product) => product.category === "women's clothing")
  );
  return (
    <div className="womenProduct-wrapper">
      {products
        .filter((product) => product.category === "women's clothing")
        .map((product) => {
          return (
            <div className="card">
              <img className="img" src={product.image} />
              <h4>{product.title}</h4>
              <h5>₹{product.price}</h5>
              <span>
                <button
                  className="btn"
                  onClick={() => {
                    //   cartHandeler(product);
                  }}
                >
                  ADD TO CART
                </button>
              </span>
            </div>
          );
        })}
    </div>
  );
};

export default WomenProduct;

