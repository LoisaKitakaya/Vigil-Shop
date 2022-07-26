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

const Home = ({ addToCart }) => {
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
                        Price: <em>{item.price} $</em>
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
