import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Footer from "./layout/Footer";
import NavbarComponent from "./layout/Navbar";

import Cart from "./pages/Cart";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import Product from "./pages/Product";
import SignUp from "./pages/SignUp";

import "./css/App.css";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAdd = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);

    if (productExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productExist, quantity: productExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }

    console.log(cartItems);
  };

  const handleRemove = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);

    if (productExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productExist, quantity: productExist.quantity - 1 }
            : item
        )
      );
    }

    console.log(cartItems);
  };

  const handleClear = () => {
    setCartItems([]);
  };

  const calculateTotal = cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );

  return (
    <div className="App">
      {/* Navigation */}
      <NavbarComponent cartItems={cartItems} />
      {/* Navigation */}

      <br />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:slug" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
      {/* Routes */}

      <br />

      {/* Footer */}
      <Footer />
      {/* Footer */}
    </div>
  );
}

export default App;
