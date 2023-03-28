import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./CartItems.css";
function CartItems() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);
  console.log("This is cartItems", products);
  return (
    <div className="cart-container">
      <div className="cart-heading">
        <h1>Shopping cart</h1>
      </div>
      {products.map((product) => {
        return (
          <div className="cart-card">
            <div className="cart-image">
              <img src={product.image} />
            </div>
            <div className="cart-description">
              <p>{product.title}</p>
              <p>
                <strong>Category: </strong>
                {product.category}
              </p>
              <p>
                <strong>Rating: </strong>
                {product.rating.rate}
                <i class="fa-solid fa-star"></i>
              </p>
            </div>
            <div className="btns">
              <button>+</button>
              <button>-</button>
            </div>
            <div className="cart-price">
              <h4>₹{product.price}</h4>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CartItems;
