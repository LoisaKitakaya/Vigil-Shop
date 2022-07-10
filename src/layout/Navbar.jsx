import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a
            href="https://vigilsurveillance.netlify.app/"
            className="navbar-brand fs-3 btn"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            title="Go to company site"
          >
            Vigil Surveillance
          </a>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to={"/"} class="nav-link">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link to={"/login"} class="nav-link">
                  Sign in
                </Link>
              </li>
            </ul>
          </div>
          <form className="d-flex nav-search">
            <input
              className="form-control me-2"
              type="search"
              name="search"
              placeholder="Search"
            />
            <button className="btn btn-outline-dark" type="submit">
              Search
            </button>
          </form>
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

export default Navbar;
