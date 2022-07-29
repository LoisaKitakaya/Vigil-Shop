import { Link, useNavigate } from "react-router-dom";

const Checkout = ({ cartItems, calculateTotal }) => {
  let navigate = useNavigate();
  
  return (
    <div className="App-sub-container">
      <div className="this-container">
        <div className="prod-navigation">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to={"/"}>Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to={"/cart"}>Cart</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Checkout
              </li>
            </ol>
          </nav>
          <div className="prod-nav-container">
            <button
              className="btn btn-sm btn-outline-secondary"
              onClick={() => navigate(-1)}
            >
              <i class="bi bi-arrow-left-short"></i> Back
            </button>
            <Link to={"/payment"} className="btn btn-sm btn-warning">
              <i class="bi bi-credit-card"></i> Payment
            </Link>
          </div>
        </div>
        <hr className="divider" />
        <div className="checkout-container"></div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Checkout;
