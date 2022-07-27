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

const Brands = ({ pageName }) => {
  pageTitle("Vigil Shop | Brands");

  const slug = useParams();

  const { loading, error, data } = useQuery(GET_PRODUCTS_BY_BRAND, {
    variables: { slug: slug.slug },
  });
  console.log(data);

  if (loading) return <p>Loading...</p>;
  if (error) return `Error! ${error}`;

  return (
    <div className="App-sub-container">
      <div className="this-container">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <Link to={"/"}>Home</Link>
            </li>
            <li class="breadcrumb-item">
              <Link to={"/allproducts"}>All products</Link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              {pageName}
            </li>
          </ol>
        </nav>
        <hr className="divider" />
        <div className="prod-navigation">
          <h3 className="home-title">{pageName}</h3>
          <div className="prod-nav-container">
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