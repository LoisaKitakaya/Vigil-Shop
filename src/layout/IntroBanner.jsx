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
        <a href="#" className="btn btn-success">
          Purchase
        </a>
        <a href="" className="btn btn-primary">
          Go to main site
        </a>
      </div>
    </div>
  );
};

export default IntroBanner;
