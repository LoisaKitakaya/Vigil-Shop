import { useQuery, gql } from "@apollo/client";

import pageTitle from "../components/PageTitle";
import IntroBanner from "../layout/IntroBanner";

const GET_PRODUCTS = gql`
  query GET_PRODUCTS {
    allProducts {
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
      <div className="container">
        <h1>Home</h1>
      </div>
    </div>
  );
};

export default Home;
