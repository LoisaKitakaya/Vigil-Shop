import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";

import pageTitle from "../components/PageTitle";
import IntroBanner from "../layout/IntroBanner";

const GET_PRODUCTS = gql`
  query GET_NEW_PRODUCTS {
    homeProducts(limit: 6) {
      id
      name
      slug
      price
      thumbnail
    }
  }
`;

const Home = () => {
  pageTitle("Vigil Shop | Home");

  const { loading, error, data } = useQuery(GET_PRODUCTS);
  console.log(data);

  if (loading) return <p>Loading...</p>;
  if (error) return `Error! ${error}`;

  return (
    <div className="App-sub-container">
      {/* component */}
      <IntroBanner />
      {/* component */}
      <div className="this-container">
        <hr className="divider" />
        <div className="prod-navigation">
          <h3 className="home-title">New Products</h3>
          <div className="prod-nav-container">
            <Link
              to={"/allproducts"}
              className="btn btn-sm btn-outline-secondary"
            >
              All products
            </Link>
            <div class="dropdown dropdown-center">
              <button
                class="btn btn-sm btn-outline-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categories
              </button>
              <ul class="dropdown-menu text-center">
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Separated link
                  </a>
                </li>
              </ul>
            </div>
            <div class="dropdown dropdown-center">
              <button
                class="btn btn-sm btn-outline-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Brands
              </button>
              <ul class="dropdown-menu text-center">
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Separated link
                  </a>
                </li>
              </ul>
            </div>
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
