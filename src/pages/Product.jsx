import { useQuery, gql } from "@apollo/client";
import { Link, useParams } from "react-router-dom";

import Cartcart from "../layout/Cartcart";
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

const Product = () => {
  const slug = useParams();

  const { loading, error, data } = useQuery(GET_PRODUCT, {
    variables: { slug: slug.slug },
  });
  console.log(data);

  if (loading) return <p>Loading...</p>;
  if (error) return `Error! ${error}`;

  return (
    <div className="products">
      {/* body */}
      <div className="navigation-container">
        {/* content */}
        <div className="container">
          {/* navbar */}
          <Navbar />
          {/* navbar */}

          <br />

          <div className="set-container">
            {/* cartcart */}
            <Cartcart />
            {/* cartcart */} {/* other */}
            <div className="other">
              <h3>Vigil surveillance, your kind of surveillance</h3>
            </div>
            {/* other */}
          </div>
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
              <NavPanel />
            </div>
            <div className="panel-content">
              <div className="product-container">
                <div class="card product-card mb-3">
                  <img
                    src={data.singleProduct.image}
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">{data.singleProduct.name}</h5>
                    <br />
                    <p class="card-text">
                      <strong>Description: </strong>{" "}
                      {data.singleProduct.description}
                    </p>
                    <p className="card-text">
                      <strong>Category: </strong>{" "}
                      <Link
                        to={`/category/${data.singleProduct.category.slug}`}
                      >
                        {data.singleProduct.category.name}
                      </Link>{" "}
                      | <strong>Collection: </strong>{" "}
                      <Link
                        to={`/collection/${data.singleProduct.collection.slug}`}
                      >
                        {data.singleProduct.collection.name}
                      </Link>
                    </p>
                    <p className="card-text">
                      <strong>Price: </strong> {data.singleProduct.price} Ksh
                    </p>
                    <form className="d-flex">
                      <input
                        type="number"
                        name="quantity"
                        className="form-control me-2"
                        defaultValue="1"
                        min="1"
                      />
                      <button className="btn btn-danger" type="submit">
                        Add to cart
                      </button>
                    </form>
                    <br />
                  </div>
                </div>
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
