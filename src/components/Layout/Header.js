import React, { useRef, useContext } from "react";
import "./Header.css";
import CartContext from "../Store/cart-context";

const Header = () => {
  const candyName = useRef("");
  const description = useRef("");
  const price = useRef(0);
  const cartCtx = useContext(CartContext);

  const addCandy = (event) => {
    event.preventDefault();

    const candies = {
      candyName: candyName.current.value,
      description: description.current.value,
      price: price.current.value,
    };

    if(candyName.current.value && description.current.value && price.current.value)
    cartCtx._currentValue.addCandy(candies);
    
    candyName.current.value = "";
    description.current.value = "";
    price.current.value = "";

  };

  return (
    <>
      <div className="header-main">
        <div className="header-title">The Candy Shop</div>
        <button className="cart">
          <div>Cart</div>
          <div className="cart-value">{cartCtx._currentValue.totalAmount}</div>
        </button>
      </div>

      <form>
        <div className="form">
          <label>Candy Name</label>
          <input type="text" ref={candyName} />
          <label>Description</label>
          <input type="text" ref={description} />
          <label>Price</label>
          <input type="number" ref={price} />
          <button className="add-btn" onClick={addCandy}>
            Add Candy
          </button>
        </div>
      </form>
    </>
  );
};

export default Header;
