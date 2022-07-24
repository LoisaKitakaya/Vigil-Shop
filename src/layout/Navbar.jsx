import { Link } from "react-router-dom";

import "../css/layout.css";

const NavbarComponent = ({ cartItems }) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-secondary">
        <div className="container contact-links">
          <div className="contact-link">
            <div className="top-links">
              <small>
                <i class="bi bi-telephone-fill m-right"></i> +254 725 131 828
              </small>
            </div>
            <div className="top-links">|</div>
            <div className="top-links">
              <small>
                <i class="bi bi-envelope-fill m-right"></i>{" "}
                kitakayaloisa@gmail.com
              </small>
            </div>
          </div>
          <div className="contact-link">
            <a
              href="https://twitter.com/FreedomLoisa"
              className="contact-icons top-links"
            >
              <i class="bi bi-twitter fs-6 text-info"></i>
            </a>
            <a
              href="https://github.com/LoisaKitakaya/Vigil-Shop"
              className="contact-icons"
            >
              <i class="bi bi-github fs-6 text-dark"></i>
            </a>
            {/* <a href="#" className="contact-icons top-links">
              <i class="bi bi-discord fs-6 text-dark"></i>
            </a>
            <a href="#" className="contact-icons">
              <i class="bi bi-instagram fs-6 text-dark"></i>
            </a> */}
          </div>
        </div>
      </nav>
      {/* separator */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link to={"/"} class="navbar-brand">
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
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent2"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i class="bi bi-person"></i> Account
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i class="bi bi-box-arrow-in-right"></i> Sign in
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="bi bi-list-stars"></i> Categories
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i class="bi bi-cart3"></i> Cart{" "}
                  <span class="badge text-bg-danger">{cartItems.length}</span>
                </a>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <div className="input-group">
                <input
                  class="form-control"
                  name="search"
                  type="search"
                  placeholder="Search item or category"
                  aria-label="Search"
                  required
                />
                <button class="btn btn-success" type="submit">
                  <i class="bi bi-search"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarComponent;
