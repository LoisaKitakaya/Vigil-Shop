const Navbar = () => {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand fs-3" href="#">
            Vigil Surveillance
          </a>
          <form className="d-flex nav-search">
            <input
              className="form-control me-2"
              type="search"
              name="search"
              placeholder="Search"
            />
            <button className="btn btn-warning" type="submit">
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
