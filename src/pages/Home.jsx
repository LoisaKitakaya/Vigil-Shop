import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";

import pageTitle from "../components/PageTitle";
import IntroBanner from "../layout/IntroBanner";

const GET_PRODUCTS = gql`
  query GET_NEW_PRODUCTS {
    homeProducts(limit: 6) {
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
        <h3 className="home-title">New Products</h3>
        <div className="display-container">
          {data.homeProducts.map((item, index) => {
            const list = (
              <>
                <div class="card bg-light" key={index}>
                  <img src={item.thumbnail} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">{item.name}</h5>
                    <hr />
                    <p class="card-text">
                      <strong>
                        Price: <em>{item.price} $</em>
                      </strong>
                    </p>
                    <Link
                      to={`/product/${item.slug}`}
                      class="btn btn-outline-dark container-fluid"
                    >
                      View product
                    </Link>
                    <br />
                    <br />
                    <button className="btn btn-outline-success container-fluid">
                      Add to cart <i class="bi bi-cart-plus"></i>
                    </button>
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
