import React, { useContext } from "react";
import "./CandyList.css";
import CartContext from "../Store/cart-context";

const CandyList = () => {
  const cartCtx = useContext(CartContext);

  return (
    <div>
      <ul>
        {cartCtx._currentValue.candies.map((candy, ind) => {
          return (
            <li key={ind}>
              <div className="candy">
                <div className="candy-list">
                  {`${candy.candyName}  ${candy.description}  ${candy.price}`}
                </div>
                <div className="buy-btn">
                  <button
                    onClick={(e) => cartCtx._currentValue.addToCart({...candy, quantity: 1},ind)}
                  >
                    Buy1
                  </button>
                  <button
                    onClick={(e) => cartCtx._currentValue.addToCart({...candy, quantity: 2}, ind)}
                  >
                    Buy2
                  </button>
                  <button
                    onClick={(e) => cartCtx._currentValue.addToCart({...candy, quantity: 3}, ind)}
                  >
                    Buy3
                  </button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CandyList;
