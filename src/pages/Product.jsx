import { useQuery, gql } from "@apollo/client";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";

import Carousel from "react-bootstrap/Carousel";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import pageTitle from "../components/PageTitle";
import ReviewsContainer from "../components/ReviewsContainer";

const GET_PRODUCT = gql`
  query GET_PRODUCT($slug: String!) {
    singleProduct(slug: $slug) {
      id
      name
      fullName
      slug
      price
      thumbnail
      slideOne
      slideTwo
      slideThree
      description
      specifications
      productCategory {
        name
        slug
      }
      productBrand {
        name
        slug
      }
      productinventorySet {
        quantity
      }
      productReview {
        id
        user {
          username
        }
        name
        review
        rating
      }
    }
  }
`;

const Product = ({ addToCart, setPageName, loader }) => {
  const [rating, setRating] = useState(1);

  pageTitle("Vigil Shop | Product");

  const slug = useParams();

  const { loading, error, data } = useQuery(GET_PRODUCT, {
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
              {data.singleProduct.name}
            </li>
          </ol>
        </nav>
        <hr className="divider" />
        <div className="prod-navigation">
          <h3 className="home-title">{data.singleProduct.name}</h3>
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
        <div className="display-container-2">
          <div className="card">
            <Carousel variant="dark">
              <Carousel.Item interval={2000}>
                <img
                  className="d-block w-100"
                  src={data.singleProduct.thumbnail}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <img
                  className="d-block w-100"
                  src={data.singleProduct.slideOne}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <img
                  className="d-block w-100"
                  src={data.singleProduct.slideTwo}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <img
                  className="d-block w-100"
                  src={data.singleProduct.slideThree}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="product-description">
            <div className="container-fluid">
              <h5 className="card-title">
                <strong>
                  Full name: <em>{data.singleProduct.fullName}</em>
                </strong>
              </h5>
              <hr className="divider" />
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
              <hr className="divider" />
              <p className="card-text">
                <strong>
                  Category:{" "}
                  <em>
                    <Link
                      className="text-dark"
                      to={`/category/${data.singleProduct.productCategory.slug}`}
                      onClick={() =>
                        setPageName(data.singleProduct.productCategory.name)
                      }
                    >
                      {data.singleProduct.productCategory.name}
                    </Link>
                  </em>
                </strong>
              </p>
              <p className="card-text">
                <strong>
                  Brand:{" "}
                  <em>
                    <Link
                      className="text-dark"
                      to={`/brand/${data.singleProduct.productBrand.slug}`}
                      onClick={() =>
                        setPageName(data.singleProduct.productBrand.name)
                      }
                    >
                      {data.singleProduct.productBrand.name}
                    </Link>
                  </em>
                </strong>
              </p>
              <p className="card-text">
                <strong>
                  Price:{" "}
                  <em>
                    {data.singleProduct.price.toLocaleString(
                      navigator.language,
                      { minimumFractionDigits: 2 }
                    )}{" "}
                    KES
                  </em>
                </strong>
              </p>
              <hr className="divider" />
            </div>
            <div>
              <button
                className="btn btn-dark container-fluid"
                onClick={() => addToCart(data.singleProduct)}
              >
                Add to cart <i className="bi bi-cart-plus"></i>
              </button>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="product-details">
          <Tabs defaultActiveKey="desc" className="mb-3" variant="tabs">
            <Tab eventKey="desc" title="Description">
              <div
                className="content card"
                dangerouslySetInnerHTML={{
                  __html: data.singleProduct.description,
                }}
              />
            </Tab>
            <Tab eventKey="specs" title="Specifications">
              <div
                className="content card"
                dangerouslySetInnerHTML={{
                  __html: data.singleProduct.specifications,
                }}
              />
            </Tab>
            <Tab eventKey="review" title="See reviews">
              <ReviewsContainer reviews={data.singleProduct.productReview} />
            </Tab>
            <Tab eventKey="form" title="Write review">
              <form className="card review-form">
                <div className="mb-3">
                  <input
                    type="text"
                    name="productname"
                    className="form-control"
                    placeholder="product name"
                    value={data.singleProduct.name}
                    readOnly
                  />
                </div>
                <input
                  type="range"
                  className="form-range"
                  name="productrating"
                  defaultValue={1}
                  min="1"
                  max="5"
                  onChange={(e) => {
                    e.preventDefault();
                    setRating(e.target.value);
                  }}
                />
                <p className="card-text">
                  <i className="bi bi-star-fill text-warning fs-5"></i> {rating}{" "}
                  stars
                </p>
                <br />
                <div className="form-floating">
                  <textarea
                    className="form-control floating-textarea"
                    name="productreview"
                    placeholder="Leave a comment here"
                  ></textarea>
                  <label htmlhtmlFor="floatingTextarea">Comments</label>
                </div>
                <br />
                <button type="submit" className="btn btn-secondary">
                  Submit
                </button>
              </form>
            </Tab>
          </Tabs>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Product;
