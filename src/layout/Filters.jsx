import { Link, useNavigate } from "react-router-dom";

const Filters = ({ setPageName }) => {
  let navigate = useNavigate();

  return (
    <div className="prod-nav-container">
      <button className="btn btn-sm btn-dark" onClick={() => navigate(-1)}>
        <i className="bi bi-arrow-left-short"></i> Back
      </button>
      <div className="dropdown dropdown-center">
        <button
          className="btn btn-sm btn-dark dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Categories
        </button>
        <ul className="dropdown-menu">
          <li>
            <Link
              to={"/category/bullet"}
              className="dropdown-item"
              onClick={() => setPageName("Bullet")}
            >
              Bullet cameras
            </Link>
          </li>
          <li>
            <Link
              to={"/category/c-mount"}
              className="dropdown-item"
              onClick={() => setPageName("C-Mount")}
            >
              C-Mount cameras
            </Link>
          </li>
          <li>
            <Link
              to={"/category/day-and-night"}
              className="dropdown-item"
              onClick={() => setPageName("Day & Night")}
            >
              Day {"&"} Night cameras
            </Link>
          </li>
          <li>
            <Link
              to={"/category/pan-tilt-zoom"}
              className="dropdown-item"
              onClick={() => setPageName("Pan Tilt Zoom")}
            >
              Pan Tilt Zoom cameras
            </Link>
          </li>
          <li>
            <Link
              to={"/category/high-definition"}
              className="dropdown-item"
              onClick={() => setPageName("High Definition")}
            >
              High Definition cameras
            </Link>
          </li>
          <li>
            <Link
              to={"/category/night-vision"}
              className="dropdown-item"
              onClick={() => setPageName("Night vision")}
            >
              Night Vision cameras
            </Link>
          </li>
          <li>
            <Link
              to={"/category/network"}
              className="dropdown-item"
              onClick={() => setPageName("Network/IP")}
            >
              Network/IP cameras
            </Link>
          </li>
          <li>
            <Link
              to={"/category/wireless"}
              className="dropdown-item"
              onClick={() => setPageName("Wireless")}
            >
              Wireless cameras
            </Link>
          </li>
          <li>
            <Link
              to={"/category/dome"}
              className="dropdown-item"
              onClick={() => setPageName("Dome")}
            >
              Dome cameras
            </Link>
          </li>
          <li>
            <Link
              to={"/category/spy"}
              className="dropdown-item"
              onClick={() => setPageName("Spy")}
            >
              Spy cameras
            </Link>
          </li>
        </ul>
      </div>
      <div className="dropdown dropdown-center">
        <button
          className="btn btn-sm btn-dark dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Brands
        </button>
        <ul className="dropdown-menu">
          <li>
            <Link
              to={"/brand/canon"}
              className="dropdown-item"
              onClick={() => setPageName("Canon")}
            >
              Canon
            </Link>
          </li>
          <li>
            <Link
              to={"/brand/hikvision"}
              className="dropdown-item"
              onClick={() => setPageName("Hikvision")}
            >
              Hikvision
            </Link>
          </li>
          <li>
            <Link
              to={"/brand/geovision"}
              className="dropdown-item"
              onClick={() => setPageName("GeoVision")}
            >
              GeoVision
            </Link>
          </li>
          <li>
            <Link
              to={"/brand/lorex-technology"}
              className="dropdown-item"
              onClick={() => setPageName("Lorex Technology")}
            >
              Lorex Technology
            </Link>
          </li>
          <li>
            <Link
              to={"/brand/axis-communications"}
              className="dropdown-item"
              onClick={() => setPageName("Axis Communications")}
            >
              Axis Communications
            </Link>
          </li>
          <li>
            <Link
              to={"/brand/dahua-technology"}
              className="dropdown-item"
              onClick={() => setPageName("Dahua Technology")}
            >
              Dahua Technology
            </Link>
          </li>
          <li>
            <Link
              to={"/brand/hanwha-techwin"}
              className="dropdown-item"
              onClick={() => setPageName("Hanwha Techwin")}
            >
              Hanwha Techwin
            </Link>
          </li>
          <li>
            <Link
              to={"/brand/samsung"}
              className="dropdown-item"
              onClick={() => setPageName("Samsung")}
            >
              Samsung
            </Link>
          </li>
          <li>
            <Link
              to={"/brand/amcrest"}
              className="dropdown-item"
              onClick={() => setPageName("Amcrest")}
            >
              Amcrest
            </Link>
          </li>
          <li>
            <Link
              to={"/brand/swann"}
              className="dropdown-item"
              onClick={() => setPageName("Swann")}
            >
              Swann
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Filters;
