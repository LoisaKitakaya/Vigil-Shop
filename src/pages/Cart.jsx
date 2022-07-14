import { Link } from "react-router-dom";

import pageTitle from "../components/PageTitle";

const Cart = ({ handleAdd, handleRemove, handleClear, cartItems }) => {
  pageTitle("Vigil | Cart");

  return (
    <div className="cart-parent">
      {/* body */}

      {/* main body */}
      <div className="container-fluid">
        {/* content */}
        <div className="panel">
          {/* panel nav */}
          <div className="panel-nav"></div>
          <div className="panel-content">
            <div className="product-container">
              <table className="table table-hover table-responsive table-borderless table-warning container">
                <caption className="fs-1">Total: </caption>
                <thead className="table-dark">
                  <tr>
                    <th scope="col" className="text-center">
                      Product
                    </th>
                    <th scope="col" className="text-center">
                      Quantity
                    </th>
                    <th scope="col" className="text-center">
                      Total item price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* space */}
                  {cartItems.map((item) => {
                    return (
                      <>
                        <tr key={item.id}>
                          <td>
                            <div class="card">
                              <div class="row g-0">
                                <div class="col-md-4">
                                  <img
                                    src={item.image}
                                    class="img-fluid rounded-start"
                                    alt="..."
                                  />
                                </div>
                                <div class="col-md-8">
                                  <div class="card-body">
                                    <h5 class="card-title">{item.name}</h5>
                                    <Link
                                      to={`/product/${item.slug}`}
                                      className="card-text btn btn-outline-danger container-fluid"
                                    >
                                      View product
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <br />
          </div>
          {/* panel nav */}
        </div>
        {/* content */}
      </div>
      {/* main body */}

      {/* body */}
    </div>
  );
};

export default Cart;
