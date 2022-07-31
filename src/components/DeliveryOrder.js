import { gql, useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";

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
        created_date
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

const DeliveryOrder = ({ setErrorRedirect, cartItems, calculateTotal }) => {
  const [createOrder, { data, loading, error }] = useMutation(
    CREATE_DELIVERY_ORDER
  );

  if (data) {
    console.log(data);
  }

  let navigate = useNavigate();

  if (loading)
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border m-5 text-primary fs-4" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );

  if (error) {
    <div className="alert alert-danger text-center" role="alert">
      <h4>Error: {error.message}</h4>
      <button
        className="btn btn-outline-primary btn-sm"
        onClick={() => navigate("/auth", { replace: true })}
      >
        Try again
      </button>
    </div>;
  }

  return (
    <form
      className="card tab-card"
      onSubmit={(e) => {
        e.preventDefault();

        createOrder({
          variables: {
            city: e.target.city.value,
            address: e.target.address.value,
            phone: e.target.phone.value,
            items: JSON.stringify(cartItems),
            total: calculateTotal,
          },
        });
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
  );
};

export default DeliveryOrder;
