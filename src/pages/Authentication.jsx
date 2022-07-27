import { Link } from "react-router-dom";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import pageTitle from "../components/PageTitle";

const UserAuth = ({ loader }) => {
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
              <form className="card review-form">
                <br />
                <h4 className="text-center">Log in to your Vigil account</h4>
                <br />
                <div class="form-floating mb-3">
                  <input
                    type="text"
                    name="username"
                    class="form-control"
                    placeholder="e.g. JohnDoe"
                    required
                  />
                  <label for="floatingInput">Username</label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    type="password"
                    name="password"
                    class="form-control"
                    placeholder="************"
                    required
                  />
                  <label for="floatingPassword">Password</label>
                </div>
                <br />
                <button type="submit" className="btn btn-outline-dark container-fluid">
                  Log in
                </button>
                <br />
                <div class="form-text text-center">
                  <em>
                    We'll never share your information with anyone else. Your
                    privacy is our priority.
                  </em>
                </div>
              </form>
            </Tab>
            <Tab eventKey="register" title="Register">
              <form className="card review-form">
                <br />
                <h4 className="text-center">Create a new Vigil account</h4>
                <br />
                <div class="form-floating mb-3">
                  <input
                    type="text"
                    name="username"
                    class="form-control"
                    placeholder="e.g. JohnDoe"
                    required
                  />
                  <label for="floatingInput">Username</label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    type="email"
                    name="email"
                    class="form-control"
                    placeholder="name@example.com"
                    required
                  />
                  <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    type="password"
                    name="password1"
                    class="form-control"
                    placeholder="************"
                    required
                  />
                  <label for="floatingPassword">Password</label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    type="password"
                    name="password2"
                    class="form-control"
                    placeholder="************"
                    required
                  />
                  <label for="floatingPassword">Confirm password</label>
                </div>
                <br />
                <button type="submit" className="btn btn-outline-dark container-fluid">
                  Register
                </button>
                <br />
                <div class="form-text text-center">
                  <em>
                    We'll never share your information with anyone else. Your
                    privacy is our priority.
                  </em>
                </div>
              </form>
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
