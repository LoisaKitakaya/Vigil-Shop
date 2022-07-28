import { useQuery, gql } from "@apollo/client";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";

import Carousel from "react-bootstrap/Carousel";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";

import Review from "../components/Review";
import pageTitle from "../components/PageTitle";
import ReviewsContainer from "../components/ReviewsContainer";
import Filters from "../layout/Filters";

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

const Product = ({ addToCart, setPageName, loader, setErrorRedirect }) => {
  const [show, setShow] = useState(false);

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
          <Filters setPageName={setPageName} />
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
                onClick={() => {
                  addToCart(data.singleProduct);

                  setShow(true);
                }}
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
              <Review
                loader={loader}
                productName={data.singleProduct.name}
                setErrorRedirect={setErrorRedirect}
              />
            </Tab>
          </Tabs>
        </div>
      </div>
      <br />
      <br />
      <ToastContainer className="p-3 toast-position text-light">
        <Toast
          onClose={() => setShow(false)}
          show={show}
          delay={3000}
          autohide
          bg="success"
        >
          <Toast.Body>
            <i className="bi bi-check-circle-fill"></i> Product has been added
            to cart.
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
};

export default Product;
