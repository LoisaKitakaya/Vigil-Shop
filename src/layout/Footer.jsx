const Footer = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container row text-light footer">
          <div className="col-auto">
            <strong>
              <p>Store</p>
            </strong>
            <a href="#" className="nav-link">
              About us
            </a>
            <a href="#" className="nav-link">
              Find store
            </a>
            <a href="#" className="nav-link">
              How to shop
            </a>
            <a href="#" className="nav-link">
              Company site
            </a>
          </div>
          <div className="col-auto">
            <strong>
              <p>Support</p>
            </strong>
            <a href="#" className="nav-link">
              Payment
            </a>
            <a href="#" className="nav-link">
              Help center
            </a>
            <a href="#" className="nav-link">
              Report a product
            </a>
            <a href="#" className="nav-link">
              Returns {"&"} refunds
            </a>
          </div>
          <div className="col-auto">
            <strong>
              <p>Information</p>
            </strong>
            <a href="#" className="nav-link">
              Shipping info
            </a>
            <a href="#" className="nav-link">
              Privacy policy
            </a>
            <a href="#" className="nav-link">
              Terms {"&"} conditions
            </a>
            <a href="#" className="nav-link">
              Corporate {"&"} bulk purchase
            </a>
          </div>
          <div className="col-4">
            <strong>
              <p>Newsletter</p>
            </strong>
            <p>Subscribe to get updates about our products and offers</p>
            <form className="d-flex" role="search">
              <div className="input-group">
                <input
                  className="form-control"
                  name="newsletter"
                  type="email"
                  placeholder="your email"
                  aria-label="Subscribe"
                  required
                />
                <button className="btn btn-success" type="submit">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </nav>
      {/* separator */}
      <nav className="navbar navbar-expand-lg bg-secondary">
        <div className="container footer-links">
          <div>
            <small>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-c-circle"
                viewBox="0 0 16 16"
              >
                <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM8.146 4.992c-1.212 0-1.927.92-1.927 2.502v1.06c0 1.571.703 2.462 1.927 2.462.979 0 1.641-.586 1.729-1.418h1.295v.093c-.1 1.448-1.354 2.467-3.03 2.467-2.091 0-3.269-1.336-3.269-3.603V7.482c0-2.261 1.201-3.638 3.27-3.638 1.681 0 2.935 1.054 3.029 2.572v.088H9.875c-.088-.879-.768-1.512-1.729-1.512Z" />
              </svg>{" "}
              Copyright 2022 Vigil Surveillance
            </small>
          </div>
          <div>
            <small>
              Developed by{" "}
              <a href="https://freedomloisa.netlify.app/" className="text-dark">
                Freedom Loisa
              </a>
            </small>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Footer;
