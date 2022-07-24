import pageTitle from "../components/PageTitle";

const Cart = ({ cartItems }) => {
  pageTitle("Vigil Shop | Cart");

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
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Product</th>
                <th scope="col">quantity</th>
                <th scope="col">price</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => {
                const list = (
                  <>
                    <tr>
                      <td>{item.name}</td>
                      <td>{item.quantity}</td>
                      <td>{item.price}</td>
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
