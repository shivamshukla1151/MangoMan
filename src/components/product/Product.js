import React from "react";
import { useEffect } from "react";
import "./Product.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/productSlice";
import { add } from "../../store/cartSlice";
const Products = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);
  console.log(products);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  const cartHandeler = (product) => {
    dispatch(add(product));
  };
  return (
    <div className="product-wrapper">
      {products.map((product) => {
        return (
          <div className="card">
            <img className="img" src={product.image} />
            <h4>{product.title}</h4>
            <h5>₹{product.price}</h5>
            <span>
              <button
                className="btn"
                onClick={() => {
                  cartHandeler(product);
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

export default Products;
