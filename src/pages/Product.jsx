import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router-dom";

import pageTitle from "../components/PageTitle";

const GET_PRODUCT = gql`
  query GET_PRODUCT($slug: String!) {
    singleProduct(slug: $slug) {
      id
      name
      image
      description
      price
      slug
      category {
        name
        slug
      }
      collection {
        name
        slug
      }
    }
  }
`;

const Product = ({ handleAdd }) => {
  pageTitle("Vigil Shop | Products");

  const slug = useParams();

  const { loading, error, data } = useQuery(GET_PRODUCT, {
    variables: { slug: slug.slug },
  });
  console.log(data);

  if (loading) return <p>Loading...</p>;
  if (error) return `Error! ${error}`;

  return <h1>Product</h1>;
};

export default Product;
