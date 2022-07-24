import { useQuery, gql } from "@apollo/client";
import { Link, useParams } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

import pageTitle from "../components/PageTitle";

const GET_PRODUCT = gql`
  query GET_PRODUCT($slug: String!) {
    singleProduct(slug: $slug) {
      name
      slug
      price
      thumbnail
      slideOne
      slideTwo
      slideThree
      description
      productCategory {
        name
        slug
      }
      productinventorySet {
        quantity
      }
    }
  }
`;

const Product = ({ addToCart }) => {
  pageTitle("Vigil Shop | Products");

  const slug = useParams();

  const { loading, error, data } = useQuery(GET_PRODUCT, {
    variables: { slug: slug.slug },
  });
  console.log(data);

  if (loading) return <p>Loading...</p>;
  if (error) return `Error! ${error}`;

  return (
    <div className="App-sub-container">
      <div className="this-container">
        <h3 className="home-title">{data.singleProduct.name}</h3>
        <div className="display-container-2">
          <div className="card bg-light">
            <Carousel variant="dark">
              <Carousel.Item interval={1000}>
                <img
                  className="d-block w-100"
                  src={data.singleProduct.thumbnail}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item interval={1000}>
                <img
                  className="d-block w-100"
                  src={data.singleProduct.slideOne}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item interval={1000}>
                <img
                  className="d-block w-100"
                  src={data.singleProduct.slideTwo}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item interval={1000}>
                <img
                  className="d-block w-100"
                  src={data.singleProduct.slideThree}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="product-description">
            <div>
              <h5 className="card-title">{data.singleProduct.name}</h5>
              <hr />
              <p className="card-text text-success">
                <small>
                  <strong>
                    In stock:{" "}
                    <em>
                      {data.singleProduct.productinventorySet[0].quantity}
                    </em>
                  </strong>
                </small>
              </p>
              <hr />
              <p className="card-text">
                <strong>
                  Category:{" "}
                  <em>
                    <Link
                      className="text-dark"
                      to={`/category/${data.singleProduct.productCategory.slug}`}
                    >
                      {data.singleProduct.productCategory.name}
                    </Link>
                  </em>
                </strong>
              </p>
              <p className="card-text">
                <strong>
                  Price: <em>{data.singleProduct.price} $</em>
                </strong>
              </p>
              <hr />
            </div>
            <div>
              <button
                className="btn btn-outline-success container-fluid"
                onClick={() => addToCart(data.singleProduct)}
              >
                Add to cart <i className="bi bi-cart-plus"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="product-details">
          <div className="card border-secondary">
            <div className="card-header">
              <ul className="nav justify-content-center">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Description
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Specifications
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    See Reviews
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Write review
                  </a>
                </li>
              </ul>
            </div>
            <div
              className="card-body text-secondary"
              dangerouslySetInnerHTML={{
                __html: data.singleProduct.description,
              }}
            />
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Product;
