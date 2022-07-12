import { useEffect, useState } from "react";

import CartContainer from "../components/cartContainer";

import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";
import NavPanel from "../layout/NavPanel";
import SiteLinks from "../layout/SiteLinks";

const Cart = () => {
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const initialCount = JSON.parse(localStorage.getItem("cart"));
    setQuantity(initialCount.length);
  }, []);

  let itemsArray = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];

  localStorage.setItem("cart", JSON.stringify(itemsArray));
  const data = JSON.parse(localStorage.getItem("cart"));
  console.log(itemsArray);

  return (
    <div className="cart-parent">
      {/* body */}
      <div className="navigation-container">
        {/* content */}
        <div className="container">
          {/* navbar */}
          <Navbar />
          {/* navbar */}
        </div>
        {/* content */}
      </div>

      {/* main body */}
      <div className="container">
        {/* content */}
        <div className="container-not-fluid">
          {/* content */}
          <div className="panel">
            {/* panel nav */}
            <div className="panel-nav">
              <NavPanel quantity={quantity} />
            </div>
            <div className="panel-content">
              <div className="product-container">
                <table className="table table-hover table-responsive table-borderless table-warning">
                  <thead className="table-dark">
                    <tr>
                      <th scope="col" className="text-center">
                        Product
                      </th>
                      <th scope="col" className="text-center">
                        Quantity
                      </th>
                      <th scope="col" className="text-center">
                        Total item price
                      </th>
                    </tr>
                  </thead>
                  <CartContainer data={data} />
                </table>
              </div>
              <br />
            </div>
            {/* panel nav */}
          </div>
          {/* content */}
        </div>
        {/* content */}
      </div>
      {/* main body */}

      <div className="footer-container">
        {/* content */}
        <div className="container">
          {/* other */}
          <SiteLinks />
          {/* other */}
          <br />
          {/* footer */}
          <Footer />
          {/* footer */}
        </div>
        {/* content */}
      </div>
      {/* body */}
    </div>
  );
};

export default Cart;
