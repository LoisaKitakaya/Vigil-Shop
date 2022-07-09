import { Dropdown } from "react-bootstrap";

const NavPanel = () => {
  return (
    <div className="nav-panel">
      <nav className="nav nav-pills justify-content-center">
        <Dropdown className="nav-link">
          <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
            User account
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Dashboard</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Profile</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Help center</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown className="nav-link">
          <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
            View categories
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown className="nav-link">
          <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
            View Collection
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </nav>
    </div>
  );
};

export default NavPanel;
