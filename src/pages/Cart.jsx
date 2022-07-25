import { Link } from "react-router-dom";

import pageTitle from "../components/PageTitle";

const Cart = ({ cartItems, clear }) => {
  pageTitle("Vigil Shop | Cart");

  const calculateTotal = cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );

  if (cartItems.length === 0)
    return (
      <div className="App-sub-container">
        <div className="this-container">
          <h3 className="home-title">Cart</h3>
          <div className="cart-container">
            <h1 className="text-center">Cart is empty!</h1>
          </div>
        </div>
        <br />
        <br />
      </div>
    );

  return (
    <div className="App-sub-container">
      <div className="this-container">
        <h3 className="home-title">Cart</h3>
        <div className="cart-container">
          <table className="table table-light table-hover">
            <caption>
              <h1>Total: {calculateTotal} $</h1>
            </caption>
            <caption>
              <button className="btn btn-danger" onClick={() => clear()}>
                Clear cart
              </button>
            </caption>
            <thead className="table-dark">
              <tr className="text-center">
                <th scope="col">Product</th>
                <th scope="col">quantity</th>
                <th scope="col">price</th>
                <th scope="col">Total</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              {cartItems.map((item) => {
                const list = (
                  <>
                    <tr>
                      <td className="this-td">
                        <div className="card">
                          <div className="row g-0">
                            <div className="col-md-4">
                              <img
                                src={item.thumbnail}
                                className="img-fluid rounded-start"
                                alt="..."
                              />
                            </div>
                            <div className="col-md-8">
                              <div className="card-body">
                                <h5 className="card-title text-center">
                                  {item.name}
                                </h5>
                                <br />
                                <Link
                                  to={`/product/${item.slug}`}
                                  className="btn btn-outline-dark container-fluid"
                                >
                                  View product
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="text-center">{item.quantity}</td>
                      <td className="text-center">{item.price}</td>
                      <td className="text-center">
                        {item.price * item.quantity}
                      </td>
                    </tr>
                  </>
                );

                return list;
              })}
            </tbody>
          </table>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Cart;
