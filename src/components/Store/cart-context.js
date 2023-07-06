import  React  from "react";

const CartContext = React.createContext({
   candies: [],
   totalAmount: 0,
   addToCart: (candy,index)=>{},
   addCandy: (candy) => {},
   removeCandy: (candy) => {}
});

export default CartContext;