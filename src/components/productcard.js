import { Link } from "react-router-dom";

const ProductCard = ({ data, handleAdd }) => {
  return (
    <div className="card product-card mb-3">
      <img src={data.singleProduct.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{data.singleProduct.name}</h5>
        <br />
        <p className="card-text">
          <strong>Description: </strong> {data.singleProduct.description}
        </p>
        <p className="card-text">
          <strong>Category: </strong>{" "}
          <Link to={`/category/${data.singleProduct.category.slug}`}>
            {data.singleProduct.category.name}
          </Link>{" "}
          | <strong>Collection: </strong>{" "}
          <Link to={`/collection/${data.singleProduct.collection.slug}`}>
            {data.singleProduct.collection.name}
          </Link>
        </p>
        <p className="card-text">
          <strong>Price: {data.singleProduct.price} Ksh</strong>
        </p>
        <button
          className="card-text btn btn-outline-danger container-fluid"
          onClick={() => {
            handleAdd(data.singleProduct);
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
