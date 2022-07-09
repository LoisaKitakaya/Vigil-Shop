const SiteLinks = () => {
  return (
    <div className="site-links">
      <div className="container-fluid">
        <div className="site-links-container">
          <div className="link-category some-left">
            <h4>Support</h4>
            <a href="#" className="nav-link">
              Help Center
            </a>
            <a href="#" className="nav-link ">
              Contact Us
            </a>
            <a href="#" className="nav-link ">
              Logistics {"&"} Delivery
            </a>
            <a href="#" className="nav-link ">
              Return Policy
            </a>
            <a href="#" className="nav-link ">
              Corporate {"&"} Bulk Purchase
            </a>
            <a href="#" className="nav-link ">
              Report a Product
            </a>
            <a href="#" className="nav-link ">
              Payment
            </a>
          </div>
          <div className="link-category">
            <h4>Vigil</h4>
            <a href="#" className="nav-link">
              About Us
            </a>
            <a href="#" className="nav-link">
              Blog
            </a>
            <a href="#" className="nav-link ">
              Privacy Policy
            </a>
            <a href="#" className="nav-link ">
              Terms {"&"} Conditions
            </a>
          </div>
          <div className="link-category">
            <h4>Career</h4>
            <a href="#" className="nav-link">
              Vigil Careers
            </a>
            <a href="#" className="nav-link ">
              Partner with Vigil
            </a>
            <a href="#" className="nav-link ">
              Become a Logistics service Provider
            </a>
          </div>

          <div className="link-category">
            <h4>Newsletter</h4>
            <p>Subscribe to our newsletter for more information</p>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="your email"
              />
              <button className="btn btn-warning" type="submit">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteLinks;
