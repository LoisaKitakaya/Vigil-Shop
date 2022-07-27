import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Footer from "./layout/Footer";
import NavbarComponent from "./layout/Navbar";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Product from "./pages/Product";
import AllProducts from "./pages/AllProducts";
import Categories from "./pages/Categories";
import Brands from "./pages/Brands";

import "./css/App.css";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [pageName, setPageName] = useState("");

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

  const handlePageName = (name) => {
    setPageName(name);
  };

  return (
    <div className="App">
      {/* Navigation */}
      <NavbarComponent cartItems={cartItems} />
      {/* Navigation */}

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/product/:slug"
          element={
            <Product addToCart={handleAdd} setPageName={handlePageName} />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              clear={handleClear}
              addItem={handleAdd}
              removeItem={handleRemove}
            />
          }
        />
        <Route path="/allproducts" element={<AllProducts />} />
        <Route
          path="/category/:slug"
          element={<Categories pageName={pageName} />}
        />
        <Route path="/brand/:slug" element={<Brands pageName={pageName} />} />
      </Routes>
      {/* Routes */}

      {/* Footer */}
      <Footer />
      {/* Footer */}
    </div>
  );
};

export default App;
