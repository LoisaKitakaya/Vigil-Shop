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
        <div class="card mb-2">
          <div class="row g-0">
            <div class="col-md-4">
              <img src={item.image} class="img-fluid rounded-start" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body">
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
                class="bi bi-dash-square-fill text-danger qty-register"
                onClick={remove}
              ></i>
            </span>{" "}
            <input
              type="text"
              name="cart-qty"
              value={itemQty}
              className="text-center"
            />{" "}
            <span>
              <i
                class="bi bi-plus-square-fill text-danger qty-register"
                onClick={add}
              ></i>
            </span>
          </p>
        </div>
      </td>
      <td className="text-center td">
        <div>{itemQty * item.price} Ksh</div>
      </td>
      <td className="text-center td">
        <div>
          <i class="bi bi-trash-fill text-secondary qty-register fs-5"></i>
        </div>
      </td>
    </tr>
  );
};

export default CartItem;
