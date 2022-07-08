const Footer = () => {
  return (
    <div className="footer">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand fs-3" href="#">
            Vigil Surveillance
          </a>
          <div className="d-flex to-hide navbar-nav">
            <a href="#" className="nav-link">
              Created by Freedom Loisa
            </a>
            <a className="nav-link text-dark">|</a>
            <a className="nav-link text-dark">© 2022 • vigilsurvaillance.com</a>
          </div>
          <div className="navbar-nav menu-toggle">
            <button className="nav-link btn">
              <i className="bi bi-list fs-3"></i>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Footer;
