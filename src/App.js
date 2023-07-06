import "./App.css";
import ReactDOM, {useState} from "react";
import Cart from "./components/Cart/Cart";
import Home from "./components/Home/Home";
import CartProvider from "./components/Store/cart-provider";

function App() {
  const [open, setOpen] = useState(true);

  const openModal = (show) => {
    setOpen(show);
  };

  return (
    <CartProvider>
      {ReactDOM.createPortal(
        <Cart open={open} setCart={openModal} />,
        document.getElementById("cart-modal")
      )}

      <Home />
    </CartProvider>
  );
}

export default App;
