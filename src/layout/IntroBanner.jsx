import { Link } from "react-router-dom";
import "../css/layout.css";

const IntroBanner = () => {
  return (
    <div className="intro-banner text-light">
      <div className="container banner-container">
        <h1 className="banner-title">
          Best products {"&"} brands in our store
        </h1>
        <p className="banner-text fs-4">
          Legit Products, Factory Prices, Excellent Service
        </p>
        <br />
        <Link to={"/allproducts"} className="btn btn-dark">
          Go to products <i class="bi bi-cart"></i>
        </Link>
        <a
          href="https://vigilsurveillance.netlify.app/"
          className="btn btn-dark"
        >
          Go to main site <i class="bi bi-door-open"></i>
        </a>
      </div>
    </div>
  );
};

export default IntroBanner;
