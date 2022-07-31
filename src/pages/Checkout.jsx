import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Accordion from "react-bootstrap/Accordion";
import DeliveryOrder from "../components/DeliveryOrder";
import PickupOrder from "../components/PickupOrder";
import pageTitle from "../components/PageTitle";

const Checkout = ({ cartItems, calculateTotal, setErrorRedirect }) => {
  const [shippingFee, setShippingFee] = useState(0);

  pageTitle("Vigil | Checkout");

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
                <Link to={"/cart"}>Shopping cart</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Checkout
              </li>
            </ol>
          </nav>
          <div className="prod-nav-container">
            <button
              className="btn btn-sm btn-dark mr-1rem"
              onClick={() => navigate(-1)}
            >
              <i className="bi bi-arrow-left-short"></i> Back
            </button>
          </div>
        </div>
        <hr className="divider" />
        <div className="checkout-container">
          <div className="container text-center">
            <div className="row">
              <div className="col-sm-8">
                <h4>Shipping information</h4>
                <div className="card">
                  <div className="card-body">
                    <Accordion defaultActiveKey="0">
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          <strong>
                            <em>Deliver to home or office</em>
                          </strong>
                        </Accordion.Header>
                        <Accordion.Body>
                          <DeliveryOrder
                            cartItems={cartItems}
                            setErrorRedirect={setErrorRedirect}
                          />
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>
                          <strong>
                            <em>Collect from our store</em>
                          </strong>
                        </Accordion.Header>
                        <Accordion.Body>
                          <PickupOrder />
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <h4>Summary</h4>
                <div className="summary">
                  <ul className="list-group">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      Total:
                      <span>
                        {calculateTotal.toLocaleString(navigator.language, {
                          minimumFractionDigits: 2,
                        })}{" "}
                        KES
                      </span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      Shipping fee:
                      <span>
                        {shippingFee.toLocaleString(navigator.language, {
                          minimumFractionDigits: 2,
                        })}{" "}
                        KES
                      </span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center bg-light">
                      <strong>Sub total:</strong>
                      <span>
                        <strong>
                          {(calculateTotal + shippingFee).toLocaleString(
                            navigator.language,
                            { minimumFractionDigits: 2 }
                          )}{" "}
                          KES
                        </strong>
                      </span>
                    </li>
                  </ul>
                </div>
                <hr className="divider" />
                <h4>Items in cart</h4>
                <div className="summary">
                  <ul className="list-group">
                    {cartItems.map((item) => {
                      const list = (
                        <>
                          <li
                            className="list-group-item d-flex justify-content-between align-items-center"
                            key={item.id}
                          >
                            <Link to={`/product/${item.slug}`}>
                              {item.name}
                            </Link>
                            <span className="badge bg-warning text-dark rounded-pill">
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
