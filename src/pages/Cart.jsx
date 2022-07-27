import { Link } from "react-router-dom";

import pageTitle from "../components/PageTitle";

const Cart = ({ cartItems, clear, addItem, removeItem }) => {
  pageTitle("Vigil Shop | Cart");

  const calculateTotal = cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );

  if (cartItems.length === 0)
    return (
      <div className="App-sub-container">
        <div className="this-container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to={"/"}>Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to={"/allproducts"}>All products</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Cart
              </li>
            </ol>
          </nav>
          <hr className="divider" />
          <div className="prod-navigation">
            <h3 className="home-title">Cart</h3>
            <div className="prod-nav-container">
              <button className="btn btn-sm btn-success disabled">
                Checkout <i className="bi bi-calculator"></i>
              </button>
            </div>
          </div>
          <hr className="divider" />
          <div className="cart-container">
            <h1 className="text-center">
              <i className="bi bi-cart-x text-danger"></i> Cart is empty!{" "}
              <i className="bi bi-cart-x text-danger"></i>
            </h1>
          </div>
        </div>
        <br />
        <br />
      </div>
    );

  return (
    <div className="App-sub-container">
      <div className="this-container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to={"/allproducts"}>All products</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Cart
            </li>
          </ol>
        </nav>
        <hr className="divider" />
        <div className="prod-navigation">
          <h3 className="home-title">Cart</h3>
          <div className="prod-nav-container">
            <button className="btn btn-sm btn-success">
              Checkout <i className="bi bi-calculator"></i>
            </button>
          </div>
        </div>
        <hr className="divider" />
        <div className="cart-container">
          <table className="table table-warning table-hover">
            <caption>
              <h1>
                <strong>
                  Total:{" "}
                  {calculateTotal.toLocaleString(navigator.language, {
                    minimumFractionDigits: 2,
                  })}{" "}
                  KES
                </strong>
              </h1>
            </caption>
            <caption>
              <button className="btn btn-danger" onClick={() => clear()}>
                Clear cart <i className="bi bi-cart-x"></i>
              </button>
            </caption>
            <thead className="table-dark">
              <tr className="text-center">
                <th scope="col">Product</th>
                <th scope="col">quantity</th>
                <th scope="col">price</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              {cartItems.map((item) => {
                const list = (
                  <>
                    <tr key={item.id}>
                      <td className="this-td">
                        <Link
                          to={`/product/${item.slug}`}
                          className="text-dark card-item-link"
                        >
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
                                    {item.fullName}
                                  </h5>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </td>
                      <td className="text-center">
                        <div className="other-td">
                          <span
                            className="qty-control"
                            onClick={() => removeItem(item)}
                          >
                            <i className="bi bi-dash-square-fill text-dark"></i>
                          </span>
                          <input
                            type="number"
                            name="quantity"
                            className="qty-container text-center"
                            value={item.quantity}
                            readOnly
                          />
                          <span
                            className="qty-control"
                            onClick={() => addItem(item)}
                          >
                            <i className="bi bi-plus-square-fill text-dark"></i>
                          </span>{" "}
                        </div>
                      </td>
                      <td className="text-center">
                        <div className="other-td">
                          {item.price.toLocaleString(navigator.language, {
                            minimumFractionDigits: 2,
                          })}{" "}
                          KES
                        </div>
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
