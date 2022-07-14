import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router-dom";

import ProductCard from "../components/productCard";
import DescriptionCard from "../components/descriptionCard";
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

// const initialCount = JSON.parse(localStorage.getItem("cart"));

const Product = ({ handleAdd }) => {
  pageTitle("vigil | Products");

  const slug = useParams();

  const { loading, error, data } = useQuery(GET_PRODUCT, {
    variables: { slug: slug.slug },
  });
  console.log(data);

  if (loading) return <p>Loading...</p>;
  if (error) return `Error! ${error}`;

  return (
    <div className="products">
      {/* main body */}
      <div className="container-fluid">
        {/* content */}
        <div className="panel">
          {/* panel nav */}
          <div className="panel-nav"></div>
          <div className="panel-content">
            <div className="single-product-container">
              <DescriptionCard data={data.singleProduct} />
              <ProductCard data={data.singleProduct} handleAdd={handleAdd} />
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

export default Product;
