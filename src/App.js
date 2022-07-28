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
import UserAuth from "./pages/Authentication";

import "./css/App.css";
import loader from "./assets/loader1.gif";

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
      <NavbarComponent cartItems={cartItems} setPageName={setPageName} />
      {/* Navigation */}

      {/* Routes */}
      <Routes>
        <Route
          path="/"
          element={<Home loader={loader} setPageName={handlePageName} />}
        />
        <Route
          path="/product/:slug"
          element={
            <Product
              addToCart={handleAdd}
              setPageName={handlePageName}
              loader={loader}
            />
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
        <Route
          path="/allproducts"
          element={<AllProducts loader={loader} setPageName={handlePageName} />}
        />
        <Route
          path="/category/:slug"
          element={
            <Categories
              pageName={pageName}
              loader={loader}
              setPageName={handlePageName}
            />
          }
        />
        <Route
          path="/brand/:slug"
          element={
            <Brands
              pageName={pageName}
              loader={loader}
              setPageName={handlePageName}
            />
          }
        />
        <Route path="/auth" element={<UserAuth loader={loader} />} />
      </Routes>
      {/* Routes */}

      {/* Footer */}
      <Footer />
      {/* Footer */}
    </div>
  );
};

export default App;
