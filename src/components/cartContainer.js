import CartItem from "./caritem";

const CartContainer = ({ data }) => {
  if (data.length === 0)
    return (
      <tbody className="table-group-divider">
        <p className="fs-1 message">Cart is empty</p>
      </tbody>
    );

  return (
    <tbody className="table-group-divider">
      {data.map((item) => {
        return <CartItem item={item} />;
      })}
      <div className="total-container">
        <p className="fs-1">Total: </p> <p className="fs-1">15000 Ksh</p>
      </div>
    </tbody>
  );
};

export default CartContainer;
