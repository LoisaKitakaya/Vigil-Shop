import { Link, NavLink } from "react-router-dom";

import "../css/layout.css";

const NavbarComponent = ({ cartItems }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link to={"/"} className="navbar-brand">
          Vigil Shop
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent2"
          aria-controls="navbarSupportedContent2"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent2">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                to={"/account"}
                className={({ isActive }) =>
                  isActive ? "active nav-link" : "nav-link"
                }
              >
                <i className="bi bi-person"></i> Account
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={"/auth"}
                className={({ isActive }) =>
                  isActive ? "active nav-link" : "nav-link"
                }
              >
                <i className="bi bi-box-arrow-in-right"></i> Log in
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={"/cart"}
                className={({ isActive }) =>
                  isActive ? "active nav-link" : "nav-link"
                }
              >
                <i class="bi bi-cart"></i> Cart{" "}
                <span className="badge text-bg-warning">
                  {cartItems.length}
                </span>
              </NavLink>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <div className="input-group">
              <input
                className="form-control"
                name="search"
                type="search"
                placeholder="Search item or category"
                aria-label="Search"
                required
              />
              <button className="btn btn-warning" type="submit">
                <i className="bi bi-search"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
