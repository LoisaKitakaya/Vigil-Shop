import { gql, useMutation } from "@apollo/client";
import { useState } from "react";

import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";

const ADD_REVIEW = gql`
  mutation ADD_REVIEW(
    $itemName: String!
    $itemRating: Int!
    $itemReview: String!
  ) {
    addReview(
      itemName: $itemName
      itemRating: $itemRating
      itemReview: $itemReview
    ) {
      review {
        name
        rating
        review
      }
    }
  }
`;

const Review = ({ loader, productName }) => {
  const [show, setShow] = useState(false);
  const [rating, setRating] = useState(1);

  const [addReview, { data, loading, error }] = useMutation(ADD_REVIEW);

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
    <div>
      <form
        className="card review-form"
        onSubmit={(e) => {
          e.preventDefault();

          addReview({
            variables: {
              itemName: e.target.productname.value,
              itemRating: e.target.productrating.value,
              itemReview: e.target.productreview.value,
            },
          });

          setShow(true);
        }}
      >
        <div className="mb-3">
          <input
            type="text"
            name="productname"
            className="form-control"
            placeholder="product name"
            value={productName}
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
          <i className="bi bi-star-fill text-warning fs-5"></i> {rating} stars
        </p>
        <br />
        <div className="form-floating">
          <textarea
            className="form-control floating-textarea"
            name="productreview"
            placeholder="Leave a comment here"
          ></textarea>
          <label htmlFor="floatingTextarea">Comments</label>
        </div>
        <br />
        <button type="submit" className="btn btn-secondary">
          Submit
        </button>
      </form>
      <ToastContainer className="p-3 toast-position text-light">
        <Toast
          onClose={() => setShow(false)}
          show={show}
          delay={4000}
          autohide
          bg="success"
        >
          {/* <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
          </Toast.Header> */}
          <Toast.Body>
            <i class="bi bi-check-circle-fill"></i> Your review has been added
            successfully.
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
};

export default Review;
