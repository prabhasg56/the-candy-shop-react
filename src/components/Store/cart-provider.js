import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [candies, setCandies] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const addCandy = (candy) => {
    setCandies([...candies, candy]);
  };

  const addToCart = (candy,index) => {
    let updatedItems = [...candies];

    if(updatedItems[index].quantity){
      setTotalAmount(totalAmount + parseInt(candy.price)*candy.quantity)
      let updatedItem = {
        ...candy,
        quantity: updatedItems[index].quantity + candy.quantity
      }
      updatedItems[index] = updatedItem;
      setCandies(updatedItems)
    }else {
      updatedItems[index] = candy;
      setCandies(updatedItems);
      setTotalAmount(totalAmount + parseInt(candy.price)*candy.quantity);
    }
   
   
   
  };

  console.log(candies)
  console.log(totalAmount)
  const removeCandy = (candy) => {};

  const cartContext = React.createContext({
    candies: candies,
    totalAmount: totalAmount,
    addToCart: addToCart,
    addCandy: addCandy,
    removeCandy: removeCandy,
  });
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
