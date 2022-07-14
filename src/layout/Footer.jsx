import { Link } from "react-router-dom";

// React Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container-fluid">
        <h2 className="text-center">Subscribe to our newsletter</h2>
        <small>
          <p className="text-muted text-center">
            Get latest news, developments and new products emailed to your inbox
          </p>
        </small>
        <br />
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            name="newsletter"
            type="search"
            placeholder="subscribe by providing your email"
            aria-label="Search"
          />
          <button className="btn btn-outline-dark" type="submit">
            Newsletter
          </button>
        </form>
      </div>
    </div>
  );
};

export default Footer;
