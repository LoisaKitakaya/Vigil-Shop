import { Dropdown } from "react-bootstrap";

const NavPanel = () => {
  return (
    <div className="nav-panel">
      <br />
      <nav className="nav nav-pills justify-content-center">
        <Dropdown className="nav-link">
          <Dropdown.Toggle variant="danger" id="dropdown-basic">
            User account
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Dashboard</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Help center</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown className="nav-link">
          <Dropdown.Toggle variant="danger" id="dropdown-basic">
            View categories
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Dome cameras</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Bullet cameras</Dropdown.Item>
            <Dropdown.Item href="#/action-3">PTZ cameras</Dropdown.Item>
            <Dropdown.Item href="#/action-1">C-Mount cameras</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Day {"&"} cameras</Dropdown.Item>
            <Dropdown.Item href="#/action-3">
              Night vision cameras
            </Dropdown.Item>
            <Dropdown.Item href="#/action-1">Wireless cameras</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Spy cameras</Dropdown.Item>
            <Dropdown.Item href="#/action-3">
              Thermal image cameras
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown className="nav-link">
          <Dropdown.Toggle variant="danger" id="dropdown-basic">
            View Collection
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Analog cameras</Dropdown.Item>
            <Dropdown.Item href="#/action-2">IP cameras</Dropdown.Item>
            <Dropdown.Item href="#/action-3">4 channel system</Dropdown.Item>
            <Dropdown.Item href="#/action-1">8 channel system</Dropdown.Item>
            <Dropdown.Item href="#/action-2">
              Industrial collection
            </Dropdown.Item>
            <Dropdown.Item href="#/action-3">Domestic collection</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Summer sale</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </nav>
      <hr />
    </div>
  );
};

export default NavPanel;
