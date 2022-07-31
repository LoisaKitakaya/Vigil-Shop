import { gql, useMutation } from "@apollo/client";
import { useState } from "react";

import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";

const CREATE_DELIVERY_ORDER = gql`
  mutation CREATE_ORDER(
    $city: String!
    $address: String!
    $phone: String!
    $items: [CartItemInput]!
    $total: Float!
  ) {
    createOrder(
      city: $city
      address: $address
      phone: $phone
      items: $items
      total: $total
    ) {
      order {
        orderUic
        city
        address
        phone
        total
        approved
        fulfilled
        user {
          username
          email
        }
        item {
          name
          thumbnail
          price
          quantity
        }
      }
    }
  }
`;

const DeliveryOrder = ({ cartItems, calculateTotal }) => {
  const [show, setShow] = useState(false);

  const [createOrder, { data, loading, error }] = useMutation(
    CREATE_DELIVERY_ORDER
  );

  if (data) {
    console.log(data);
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
          onClick={() => window.location.reload(false)}
        >
          Try again
        </button>
      </div>
    );
  }

  return (
    <div>
      <form
        className="card tab-card"
        onSubmit={(e) => {
          e.preventDefault();

          createOrder({
            variables: {
              city: e.target.city.value,
              address: e.target.address.value,
              phone: e.target.phone.value,
              items: cartItems.map((item) => {
                return {
                  name: item.name,
                  price: item.price,
                  thumbnail: item.thumbnail,
                  quantity: item.quantity,
                };
              }),
              total: calculateTotal,
            },
          });

          setShow(true);
        }}
      >
        <p className="text-center text-muted">Most convenient option</p>
        <div className="mb-3">
          <label for="city" className="form-label float-start">
            City
          </label>
          <input
            type="text"
            name="city"
            className="form-control"
            placeholder="your city"
            required
          />
        </div>
        <div className="mb-3">
          <label for="address" className="form-label float-start">
            Address
          </label>
          <input
            type="text"
            name="address"
            className="form-control"
            placeholder="e.g. town, estate, house no, close landmark"
            required
          />
        </div>
        <div className="mb-3">
          <label for="phone" className="form-label float-start">
            Phone
          </label>
          <input
            type="text"
            name="phone"
            className="form-control"
            placeholder="e.g. +254 725 131 828"
            required
          />
        </div>
        <div className="mb-3">
          <label for="misc" className="form-label float-start">
            Message for the seller
          </label>
          <textarea
            className="form-control"
            rows="8"
            placeholder="Comments/extra voluntary information"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-outline-dark container-fluid">
          Create order
        </button>
        <br />
        <div className="form-text text-center">
          <em>
            We'll never share your information with anyone else. Your privacy is
            our priority.
          </em>
        </div>
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
            <i className="bi bi-check-circle-fill"></i> Success. Your order has
            been created.
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
};

export default DeliveryOrder;
