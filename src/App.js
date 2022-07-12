import { Routes, Route } from "react-router-dom";

import "./css/App.css";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import Product from "./pages/Product";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div className="App">
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/product/:slug" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      {/* Routes */}
    </div>
  );
}

export default App;
