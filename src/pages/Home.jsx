import { useQuery, gql } from "@apollo/client";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Card from "../components/homecard";

import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";
import NavPanel from "../layout/NavPanel";
import SiteLinks from "../layout/SiteLinks";

const GET_PRODUCTS = gql`
  query GET_PRODUCTS {
    allProducts {
      id
      name
      slug
      image
      description
      price
    }
  }
`;

const Home = () => {
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const initialCount = JSON.parse(localStorage.getItem("cart"));
    setQuantity(initialCount.length);
  }, []);

  const { loading, error, data } = useQuery(GET_PRODUCTS);
  console.log(data);

  if (loading) return <p>Loading...</p>;
  if (error) return `Error! ${error}`;

  let itemsArray = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];

  localStorage.setItem("cart", JSON.stringify(itemsArray));
  console.log(itemsArray);

  const adjustCart = (product) => {
    itemsArray.push(product);
    localStorage.setItem("cart", JSON.stringify(itemsArray));
  };

  const cartCheck = (id, product) => {
    const count = JSON.parse(localStorage.getItem("cart"));
    const checkIndex = count.findIndex((item) => item.id === id);

    if (checkIndex !== -1) {
      console.log("Item exists");
    } else {
      adjustCart(product);
    }
  };

  const handleAdd = (product) => {
    const id = product.id;

    cartCheck(id, product);

    const count = JSON.parse(localStorage.getItem("cart"));
    setQuantity(count.length);
    console.log(itemsArray);
  };

  return (
    <div className="home">
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
                {data.allProducts.map((product) => {
                  return (
                    <Card
                      key={product.id}
                      product={product}
                      handleAdd={handleAdd}
                    />
                  );
                })}
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

export default Home;
