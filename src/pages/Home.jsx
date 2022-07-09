import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";

import Cartcart from "../layout/Cartcart";
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
  const { loading, error, data } = useQuery(GET_PRODUCTS);
  console.log(data);

  if (loading) return <p>Loading...</p>;
  if (error) return `Error! ${error}`;

  return (
    <div className="home">
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
            {/* cartcart */}

            {/* other */}
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
                {data.allProducts.map((product) => {
                  const list = (
                    <>
                      <div className="card home-card" key={product.id}>
                        <img
                          src={product.image}
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <h5 className="card-title">{product.name}</h5>
                          <p className="card-text">{product.description}</p>
                          <p className="card-text">
                            <small>
                              <strong>Price: </strong> {product.price} Ksh
                            </small>
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
                              Add
                            </button>
                          </form>
                          <br />
                          <Link
                            to={`/product/${product.slug}`}
                            className="card-text btn btn-outline-danger container-fluid"
                          >
                            View product
                          </Link>
                        </div>
                      </div>
                    </>
                  );

                  return list;
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
