import { Link } from "react-router-dom";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import pageTitle from "../components/PageTitle";
import Signin from "../components/Signin";
import Register from "../components/Register";

const UserAuth = ({ loader, errorRedirect }) => {
  pageTitle("Vigil Shop | User auth");

  return (
    <div className="App-sub-container">
      <div className="this-container">
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
        <hr className="divider" />
        <div className="prod-navigation">
          <h3 className="home-title">User authentication</h3>
        </div>
        <hr className="divider" />
        <div className="auth-container">
          <Tabs defaultActiveKey="login" className="mb-3" variant="tabs">
            <Tab eventKey="login" title="Log in">
              <Signin
                loader={loader}
                errorRedirect={errorRedirect}
              />
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
