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
            className="btn btn-sm btn-dark mr-1rem"
            onClick={() => navigate(-1)}
          >
            <i class="bi bi-arrow-left-short"></i> Back
          </button>
        </div>
        <hr className="divider" />
        <div className="auth-container card">
          <Tabs
            defaultActiveKey="login"
            className="mb-3 card-header"
            variant="tabs"
          >
            <Tab eventKey="login" title="Log in" className="card-body">
              <h4 className="text-center">Log in to your Vigil account</h4>
              <Signin loader={loader} errorRedirect={errorRedirect} />
            </Tab>
            <Tab eventKey="register" title="Register" className="card-body">
              <h4 className="text-center">Create a new Vigil account</h4>
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
