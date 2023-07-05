import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="header-main">
        <div className="header-title">The Candy Shop</div>
        <button className="cart">
          <div>Cart</div>
          <div className="cart-value">{0}</div>
        </button>
      </div>

      <form>
        <div className="form">
            <label>Candy Name</label>
            <input/>
            <label>Description</label>
            <input/>  
            <label>Price</label>
            <input/>
            <button className="add-btn">Add Candy</button>
        </div>
      </form>
    </>
  );
};

export default Header;
