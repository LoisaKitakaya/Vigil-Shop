import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link
            to={"/"}
            className="navbar-brand fs-3 btn"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            title="Go to company site"
          >
            Vigil Surveillance
          </Link>
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
