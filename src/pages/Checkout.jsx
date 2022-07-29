import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Accordion from "react-bootstrap/Accordion";

const Checkout = ({ cartItems, calculateTotal }) => {
  const [shippingFee, setShippingFee] = useState(0);

  let navigate = useNavigate();

  useEffect(() => {
    setShippingFee(200);
  }, []);

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
                    <Accordion defaultActiveKey="0">
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          <strong>
                            <em>Deliver to home or office</em>
                          </strong>
                        </Accordion.Header>
                        <Accordion.Body>
                          <form className="card tab-card">
                            <p className="text-center text-muted">
                              Most convenient option
                            </p>
                            <div className="form-floating mb-3">
                              <input
                                type="text"
                                name="username"
                                className="form-control"
                                placeholder="e.g. JohnDoe"
                                required
                              />
                              <label htmlFor="floatingInput">Username</label>
                            </div>
                            <div className="form-floating mb-3">
                              <input
                                type="email"
                                name="email"
                                className="form-control"
                                placeholder="name@example.com"
                                required
                              />
                              <label htmlFor="floatingInput">
                                Email address
                              </label>
                            </div>
                            <div className="form-floating mb-3">
                              <input
                                type="text"
                                name="firstname"
                                className="form-control"
                                placeholder="e.g. John"
                                required
                              />
                              <label htmlFor="floatingInput">First name</label>
                            </div>
                            <div className="form-floating mb-3">
                              <input
                                type="text"
                                name="secondname"
                                className="form-control"
                                placeholder="e.g. Doe"
                                required
                              />
                              <label htmlFor="floatingInput">Second name</label>
                            </div>
                            <div className="form-floating mb-3">
                              <input
                                type="password"
                                name="password1"
                                className="form-control"
                                placeholder="************"
                                required
                              />
                              <label htmlFor="floatingPassword">Password</label>
                            </div>
                            <div className="form-floating mb-3">
                              <input
                                type="password"
                                name="password2"
                                className="form-control"
                                placeholder="************"
                                required
                              />
                              <label htmlFor="floatingPassword">
                                Confirm password
                              </label>
                            </div>
                            <button
                              type="submit"
                              className="btn btn-outline-dark container-fluid"
                            >
                              Register
                            </button>
                            <br />
                            <div className="form-text text-center">
                              <em>
                                We'll never share your information with anyone
                                else. Your privacy is our priority.
                              </em>
                            </div>
                          </form>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>
                          <strong>
                            <em>Collect from our store</em>
                          </strong>
                        </Accordion.Header>
                        <Accordion.Body>
                          <form className="card tab-card">
                            <p className="text-center text-muted">
                              But we also like visitors
                            </p>
                            <div className="form-floating mb-3">
                              <input
                                type="text"
                                name="username"
                                className="form-control"
                                placeholder="e.g. JohnDoe"
                                required
                              />
                              <label htmlFor="floatingInput">Username</label>
                            </div>
                            <div className="form-floating mb-3">
                              <input
                                type="email"
                                name="email"
                                className="form-control"
                                placeholder="name@example.com"
                                required
                              />
                              <label htmlFor="floatingInput">
                                Email address
                              </label>
                            </div>
                            <div className="form-floating mb-3">
                              <input
                                type="text"
                                name="firstname"
                                className="form-control"
                                placeholder="e.g. John"
                                required
                              />
                              <label htmlFor="floatingInput">First name</label>
                            </div>
                            <div className="form-floating mb-3">
                              <input
                                type="text"
                                name="secondname"
                                className="form-control"
                                placeholder="e.g. Doe"
                                required
                              />
                              <label htmlFor="floatingInput">Second name</label>
                            </div>
                            <div className="form-floating mb-3">
                              <input
                                type="password"
                                name="password1"
                                className="form-control"
                                placeholder="************"
                                required
                              />
                              <label htmlFor="floatingPassword">Password</label>
                            </div>
                            <div className="form-floating mb-3">
                              <input
                                type="password"
                                name="password2"
                                className="form-control"
                                placeholder="************"
                                required
                              />
                              <label htmlFor="floatingPassword">
                                Confirm password
                              </label>
                            </div>
                            <button
                              type="submit"
                              className="btn btn-outline-dark container-fluid"
                            >
                              Register
                            </button>
                            <br />
                            <div className="form-text text-center">
                              <em>
                                We'll never share your information with anyone
                                else. Your privacy is our priority.
                              </em>
                            </div>
                          </form>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <h4>Summary</h4>
                <div className="summary">
                  <ul class="list-group">
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                      Total:
                      <span>{calculateTotal} KES</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                      Shipping fee:
                      <span>{shippingFee} KES</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center bg-light">
                      <strong>Sub total:</strong>
                      <span>
                        <strong>{calculateTotal + shippingFee} KES</strong>
                      </span>
                    </li>
                  </ul>
                </div>
                <hr className="divider" />
                <h4>Items in cart</h4>
                <div className="summary">
                  <ul class="list-group">
                    {cartItems.map((item) => {
                      const list = (
                        <>
                          <li
                            class="list-group-item d-flex justify-content-between align-items-center"
                            key={item.id}
                          >
                            <Link to={`/product/${item.slug}`}>
                              {item.name}
                            </Link>
                            <span class="badge bg-warning text-dark rounded-pill">
                              Qty: {item.quantity}
                            </span>
                          </li>
                        </>
                      );

                      return list;
                    })}
                  </ul>
                </div>
                <hr className="divider" />
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
