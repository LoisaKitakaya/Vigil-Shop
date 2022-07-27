import { useQuery, gql } from "@apollo/client";
import { Link, useParams } from "react-router-dom";

import pageTitle from "../components/PageTitle";

const GET_PRODUCTS_BY_BRAND = gql`
  query GET_PRODUCTS_BY_BRAND($slug: String!) {
    singleBrand(slug: $slug) {
      id
      name
      slug
      price
      thumbnail
      productBrand {
        name
      }
    }
  }
`;

const Brands = ({ pageName, loader }) => {
  pageTitle("Vigil Shop | Brands");

  const slug = useParams();

  const { loading, error, data } = useQuery(GET_PRODUCTS_BY_BRAND, {
    variables: { slug: slug.slug },
  });
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
          <h1>Error: {error.message}</h1>
        </div>
        <br />
        <br />
      </div>
    );

  return (
    <div className="App-sub-container">
      <div className="this-container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to={"/allproducts"}>All products</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {pageName}
            </li>
          </ol>
        </nav>
        <hr className="divider" />
        <div className="prod-navigation">
          <h3 className="home-title">{pageName}</h3>
          <div className="prod-nav-container">
            <div className="dropdown dropdown-center">
              <button
                className="btn btn-sm btn-outline-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categories
              </button>
              <ul className="dropdown-menu text-center">
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Separated link
                  </a>
                </li>
              </ul>
            </div>
            <div className="dropdown dropdown-center">
              <button
                className="btn btn-sm btn-outline-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Brands
              </button>
              <ul className="dropdown-menu text-center">
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Separated link
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="divider" />
        <div className="display-container">
          {data.singleBrand.map((item) => {
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
                    <p className="card-text text-success">
                      <strong>
                        <em>Brand: {item.productBrand.name}</em>
                      </strong>
                    </p>
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

export default Brands;
