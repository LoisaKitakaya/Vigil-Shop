const Navbar = () => {
  return (
    <div className="navigation">
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <a class="navbar-brand fs-3" href="#">
            Vigil Surveillance
          </a>
          <form class="d-flex nav-search">
            <input
              class="form-control me-2"
              type="search"
              name="search"
              placeholder="Search"
            />
            <button class="btn btn-warning" type="submit">
              Search
            </button>
          </form>
          <div class="navbar-nav menu-toggle">
            <button class="nav-link btn">
              <i class="bi bi-list fs-3"></i>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
