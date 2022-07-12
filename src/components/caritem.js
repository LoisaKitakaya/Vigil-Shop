import { useState } from "react";
import { Link } from "react-router-dom";

const CartItem = ({ item }) => {
  const [itemQty, setItemQty] = useState(1);

  const add = () => {
    setItemQty(itemQty + 1);
  };

  const remove = () => {
    setItemQty(itemQty - 1);

    if (itemQty <= 1) {
      setItemQty(1);
    }
  };

  return (
    <tr key={item.id}>
      <td className="this-card">
        <div className="card mb-2">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={item.image}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <p className="card-text text-center">{item.name}</p>
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
      <td className="text-center td this-td">
        <div>
          <p>
            <span>
              <i
                className="bi bi-dash-square-fill text-danger qty-register"
                onClick={remove}
              ></i>
            </span>{" "}
            <input
              type="text"
              name="cart-qty"
              value={itemQty}
              className="text-center"
              readOnly
            />{" "}
            <span>
              <i
                className="bi bi-plus-square-fill text-danger qty-register"
                onClick={add}
              ></i>
            </span>
          </p>
        </div>
      </td>
      <td className="text-center td other-td">
        <div>
          <input
            type="text"
            name="carttotal"
            id="cart-total"
            value={itemQty * item.price}
            className="text-center"
            readOnly
            // onInput={handleTotal(itemQty * item.price)}
          />{" "}
          <span>Ksh</span>
        </div>
      </td>
    </tr>
  );
};

export default CartItem;
