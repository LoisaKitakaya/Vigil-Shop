const Cartcart = () => {
  return (
    <div className="cartcart container-fluid">
      <div className="cartcart-container">
        <div class="card">
          <div class="card-header">
            <div className="top-cart">
              <div className="top-links">
                <a href="" className="cart-btn btn btn-outline-dark">
                  Log in
                </a>
                <a href="" className="cart-btn btn btn-outline-dark">
                  Sign up
                </a>
              </div>
              <div className="top-name">
                <p className="fs-6">
                  <span className="text-dark">Cart</span>{" "}
                  <i class="bi bi-bag-check-fill text-primary"></i>
                </p>
              </div>
            </div>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
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
            <li class="list-group-item">
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
          <div class="card-footer">
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
