import { useQuery, gql } from "@apollo/client";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import ProductCard from "../components/productcard";

import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";
import NavPanel from "../layout/NavPanel";
import SiteLinks from "../layout/SiteLinks";

const GET_PRODUCT = gql`
  query GET_PRODUCT($slug: String!) {
    singleProduct(slug: $slug) {
      id
      name
      image
      description
      price
      category {
        name
        slug
      }
      collection {
        name
        slug
      }
    }
  }
`;

// const initialCount = JSON.parse(localStorage.getItem("cart"));

const Product = () => {
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const initialCount = JSON.parse(localStorage.getItem("cart"));
    setQuantity(initialCount.length);
  }, []);

  const slug = useParams();

  const { loading, error, data } = useQuery(GET_PRODUCT, {
    variables: { slug: slug.slug },
  });
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
    <div className="products">
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
                <ProductCard data={data} handleAdd={handleAdd} />
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

export default Product;
