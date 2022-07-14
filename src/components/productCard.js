import { Link } from "react-router-dom";

const ProductCard = ({ data, handleAdd }) => {
  return (
    <div className="card product-card">
      <img src={data.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{data.name}</h5>
        <br />
        <p className="card-text">
          <strong>Category: </strong>{" "}
          <Link to={`/category/${data.category.slug}`}>
            {data.category.name}
          </Link>{" "}
          | <strong>Collection: </strong>{" "}
          <Link to={`/collection/${data.collection.slug}`}>
            {data.collection.name}
          </Link>
        </p>
        <p className="card-text">
          <strong>Price: {data.price} Ksh</strong>
        </p>
        <button
          className="card-text btn btn-outline-danger container-fluid"
          onClick={() => {
            handleAdd(data);
          }}
        >
          Add to cart <i className="bi bi-bag-check-fill"></i>
        </button>
        <br />
      </div>
    </div>
  );
};

export default ProductCard;
