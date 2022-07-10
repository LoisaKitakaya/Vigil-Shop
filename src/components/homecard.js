import { Link } from "react-router-dom";

const Card = ({ product, handleAdd }) => {
  return (
    <div className="card home-card" key={product.id}>
      <img src={product.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-text">
          <small>
            <strong>Price: </strong> {product.price} Ksh
          </small>
        </p>
        <Link
          to={`/product/${product.slug}`}
          className="card-text btn btn-outline-danger container-fluid"
        >
          View product
        </Link>
        <br />
        <br />
        <button
          className="card-text btn btn-outline-danger container-fluid"
          onClick={() => {
            handleAdd(product);
          }}
        >
          Add to cart <i className="bi bi-bag-check-fill"></i>
        </button>
      </div>
    </div>
  );
};

export default Card;
