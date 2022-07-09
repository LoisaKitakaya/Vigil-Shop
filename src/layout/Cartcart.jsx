import { Link } from "react-router-dom";

const Cartcart = () => {
  return (
    <div className="cartcart container-fluid">
      <div className="cartcart-container">
        <div className="card">
          <div className="card-header">
            <div className="top-cart">
              <div className="top-links">
                <a href="" className="cart-btn btn btn-outline-dark">
                  Log in
                </a>
                <Link to={"/signup"} className="cart-btn btn btn-outline-dark">
                  Sign up
                </Link>
              </div>
              <div className="top-name">
                <p className="fs-6">
                  <span className="text-dark">Cart</span>{" "}
                  <i className="bi bi-bag-check-fill text-primary"></i>
                </p>
              </div>
            </div>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <div className="cart-item">
                <div>
                  <strong>
                    <p>Quantity:</p>
                  </strong>
                </div>
                <div>
                  <p className="update">5</p>
                </div>
              </div>
            </li>
            <li className="list-group-item">
              <div className="cart-item">
                <div>
                  <strong>Total:</strong>
                </div>
                <div>
                  <p>
                    <span className="update">500</span> Ksh
                  </p>
                </div>
              </div>
            </li>
          </ul>
          <div className="card-footer">
            <div className="bot-cart">
              <a href="" className="cart-btn btn btn-outline-primary">
                View cart
              </a>
              <a href="" className="cart-btn btn btn-outline-danger">
                Empty cart
              </a>
              <a href="" className="cart-btn btn btn-outline-success">
                Checkout
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cartcart;
