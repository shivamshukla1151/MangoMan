import React from "react";
import { useState, useEffect } from "react";
import "./Product.css";

const Product = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products/");
      const items = await res.json();
      //   console.log(items);
      setProducts(items);
      console.log(products);
    };
    fetchProducts();
  }, []);
  return (
    <div className="product-wrapper">
      {products.map((product) => {
        return (
          <div className="card">
            <img className="img" src={product.image} />
            <h4>{product.title}</h4>
            <h5>₹{product.price}</h5>
            <span>
              <button className="btn">ADD TO CART</button>
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
