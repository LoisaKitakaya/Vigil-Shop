import { useQuery, gql } from "@apollo/client";

import Card from "../components/homeCard";
import pageTitle from "../components/PageTitle";

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

const Home = ({ handleAdd }) => {
  pageTitle("Vigil | Home");

  const { loading, error, data } = useQuery(GET_PRODUCTS);
  console.log(data);

  if (loading) return <p>Loading...</p>;
  if (error) return `Error! ${error}`;

  return (
    <div className="home">
      {/* main body */}
      <div className="container-fluid">
        {/* content */}
        <div className="panel">
          {/* panel nav */}
          <div className="panel-nav"></div>
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
      {/* main body */}
    </div>
  );
};

export default Home;
