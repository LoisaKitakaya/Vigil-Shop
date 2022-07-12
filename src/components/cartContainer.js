import CartItem from "./caritem";

const CartContainer = ({ data, handleClear }) => {
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
    </tbody>
  );
};

export default CartContainer;
