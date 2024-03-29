import { gql, useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
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

const Review = ({ productName, setErrorRedirect }) => {
  const [show, setShow] = useState(false);
  const [rating, setRating] = useState(1);

  let navigate = useNavigate();

  const [addReview, { data, loading, error }] = useMutation(ADD_REVIEW);

  if (data) {
    console.log("Review posted successfully.");
  }

  if (loading)
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border m-5 text-primary fs-4" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );

  if (error) {
    return (
      <div className="alert alert-danger text-center" role="alert">
        <h4>Error: {error.message}</h4>
        <button
          className="btn btn-outline-primary btn-sm"
          onClick={() => navigate("/auth", { replace: true })}
        >
          Log in
        </button>
      </div>
    );
  }

  return (
    <div>
      <form
        className="card review-form tab-card"
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

          setTimeout(() => window.location.reload(), 2000);
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
            required
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
          delay={3000}
          autohide
          bg="success"
        >
          <Toast.Body>
            <i className="bi bi-check-circle-fill"></i> Your review has been
            added successfully.
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
};

export default Review;
