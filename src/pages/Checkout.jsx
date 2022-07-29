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
              className="btn btn-sm btn-outline-secondary mr-1rem"
              onClick={() => navigate(-1)}
            >
              <i class="bi bi-arrow-left-short"></i> Back
            </button>
          </div>
        </div>
        <hr className="divider" />
        <div className="checkout-container">
          <div class="container text-center">
            <div class="row">
              <div class="col-sm-8">
                <h4>Shipping information</h4>
                <div class="card">
                  <div class="card-body">
                    This is some text within a card body.
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <h4>Summary</h4>
                <div className="summary">
                  <ul class="list-group">
                    <li class="list-group-item">An item</li>
                    <li class="list-group-item">A second item</li>
                    <li class="list-group-item">A third item</li>
                    <li class="list-group-item">A fourth item</li>
                    <li class="list-group-item">And a fifth one</li>
                  </ul>
                </div>
                <hr className="divider" />
                <h4>Items in cart</h4>
                <div className="summary">
                  <ul class="list-group">
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                      A list item
                      <span class="badge bg-warning text-dark rounded-pill">
                        14
                      </span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                      A second list item
                      <span class="badge bg-warning text-dark rounded-pill">
                        2
                      </span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                      A third list item
                      <span class="badge bg-warning text-dark rounded-pill">
                        1
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Checkout;
