import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";

import pageTitle from "../components/PageTitle";
import Filters from "../layout/Filters";
import IntroBanner from "../layout/IntroBanner";

const GET_PRODUCTS = gql`
  query GET_NEW_PRODUCTS {
    homeProducts(limit: 6) {
      id
      productName
      slug
      price
      thumbnail
    }
  }
`;

const Home = ({ loader, setPageName }) => {
  pageTitle("Vigil Shop | Home");

  const { loading, error, data } = useQuery(GET_PRODUCTS);
  console.log(data);

  if (loading)
    return (
      <div className="App-sub-container-2">
        <div className="load-and-error">
          <img src={loader} alt="loader" />
        </div>
        <br />
        <br />
      </div>
    );

  if (error)
    return (
      <div className="App-sub-container-2">
        <div className="load-and-error">
          <div className="alert alert-danger text-center" role="alert">
            <h1>Ooops! Something went wrong!</h1>
            <hr />
            <h4>Error: {error.message}</h4>
          </div>
        </div>
        <br />
        <br />
      </div>
    );

  return (
    <div className="App-sub-container">
      {/* component */}
      <IntroBanner />
      {/* component */}
      <div className="this-container">
        <br />
        <div className="prod-navigation">
          <h3 className="home-title">New Products</h3>
          <div className="prod-nav-container">
            <Filters setPageName={setPageName} />
            <Link
              to={"/allproducts"}
              className="btn btn-sm btn-dark"
            >
              All products
            </Link>
          </div>
        </div>
        <hr className="divider" />
        <div className="display-container">
          {data.homeProducts.map((item) => {
            const list = (
              <>
                <div className="card" key={item.id}>
                  <img
                    src={item.thumbnail}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <hr className="divider" />
                    <p className="card-text">
                      <strong>
                        Price:{" "}
                        <em>
                          {item.price.toLocaleString(navigator.language, {
                            minimumFractionDigits: 2,
                          })}{" "}
                          KES
                        </em>
                      </strong>
                    </p>
                    <Link
                      to={`/product/${item.slug}`}
                      className="btn btn-outline-dark container-fluid"
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
      </div>
      <br />
      <br />
    </div>
  );
};

export default Home;
