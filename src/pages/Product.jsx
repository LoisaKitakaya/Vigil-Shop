import { useQuery, gql } from "@apollo/client";
import { Link, useParams } from "react-router-dom";

import Carousel from "react-bootstrap/Carousel";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import pageTitle from "../components/PageTitle";

const GET_PRODUCT = gql`
  query GET_PRODUCT($slug: String!) {
    singleProduct(slug: $slug) {
      id
      name
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
      productinventorySet {
        quantity
      }
      productReview {
        user {
          username
        }
        name
        rating
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
        <hr />
        <div className="display-container-2">
          <div className="card bg-light">
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
        <br />
        <br />
        <div className="product-details">
          <Tabs
            defaultActiveKey="desc"
            id="justify-tab-example"
            className="mb-3"
            justify
          >
            <Tab eventKey="desc" title="Description">
              <div
                className="content"
                dangerouslySetInnerHTML={{
                  __html: data.singleProduct.description,
                }}
              />
            </Tab>
            <Tab eventKey="specs" title="Specifications">
              <div
                className="content"
                dangerouslySetInnerHTML={{
                  __html: data.singleProduct.specifications,
                }}
              />
            </Tab>
            <Tab eventKey="review" title="See reviews">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad porro
              doloribus distinctio totam quod eaque, id ut dolores in animi
              facilis consequuntur impedit tenetur tempore maiores vero placeat
              quos non!
            </Tab>
            <Tab eventKey="form" title="Write review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              earum itaque temporibus corrupti repellat eius provident?
              Laboriosam blanditiis aut corporis mollitia asperiores animi,
              velit, rerum accusantium saepe ad, commodi a.
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
