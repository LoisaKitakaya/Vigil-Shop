import { Link, useNavigate } from "react-router-dom";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import pageTitle from "../components/PageTitle";
import Signin from "../components/Signin";
import Register from "../components/Register";

const UserAuth = ({ loader, errorRedirect }) => {
  pageTitle("Vigil Shop | User auth");

  let navigate = useNavigate();

  return (
    <div className="App-sub-container">
      <div className="this-container">
        <div className="prod-navigation">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to={"/"}>Home</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                User authentication
              </li>
            </ol>
          </nav>
          <button
            className="btn btn-sm btn-outline-secondary mr-1rem"
            onClick={() => navigate(-1)}
          >
            <i class="bi bi-arrow-left-short"></i> Back
          </button>
        </div>
        <hr className="divider" />
        <div className="auth-container">
          <Tabs defaultActiveKey="login" className="mb-3" variant="tabs">
            <Tab eventKey="login" title="Log in">
              <Signin loader={loader} errorRedirect={errorRedirect} />
            </Tab>
            <Tab eventKey="register" title="Register">
              <Register loader={loader} />
            </Tab>
          </Tabs>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default UserAuth;
