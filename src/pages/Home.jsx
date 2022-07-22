import { useQuery, gql } from "@apollo/client";

import pageTitle from "../components/PageTitle";

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

const Home = ({ handleAdd }) => {
  pageTitle("Vigil Shop | Home");

  const { loading, error, data } = useQuery(GET_PRODUCTS);
  console.log(data);

  if (loading) return <p>Loading...</p>;
  if (error) return `Error! ${error}`;

  return <h1>Home</h1>;
};

export default Home;
