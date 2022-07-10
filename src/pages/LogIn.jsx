import { gql, useMutation } from "@apollo/client";
import { Link } from "react-router-dom";

import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";
import SiteLinks from "../layout/SiteLinks";

const REGISTER_USER = gql`
  mutation RegisterUser(
    $email: String!
    $username: String!
    $password1: String!
    $password2: String!
  ) {
    register(
      email: $email
      username: $username
      password1: $password1
      password2: $password2
    ) {
      success
      errors
      token
      refreshToken
    }
  }
`;

const LogIn = () => {
  const [register, { data, loading, error }] = useMutation(REGISTER_USER);
  console.log(data);

  if (loading) return "Submitting...";
  if (error) return `Submission error! ${error.message}`;

  return (
    <div className="log-in">
      {/* body */}
      <div className="navigation-container">
        {/* content */}
        <div className="container">
          {/* navbar */}
          <Navbar />
          {/* navbar */}
        </div>
        {/* content */}
      </div>

      {/* main body */}
      <div className="container">
        {/* content */}
        <div className="container-fluid">
          {/* content */}
          <div className="panel">
            <br />
            <div className="panel-content">
              <h3 className="text-center">Sign in</h3>
              <br />
              <form
                className="card form-card"
                onSubmit={(e) => {
                  e.preventDefault();

                  register({
                    variables: {
                      email: e.target.email.value,
                      username: e.target.username.value,
                      password1: e.target.password1.value,
                      password2: e.target.password2.value,
                    },
                  });

                  localStorage.setItem("token", data.register.token);
                }}
              >
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input
                    type="email"
                    name="username"
                    className="form-control"
                    placeholder="your email address"
                    aria-describedby="usernamehelp"
                  />
                  <div id="usernamehelp" className="form-text">
                    Your username should match your email.
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="***********"
                    aria-describedby="privacy-s"
                  />
                  <div id="privacy-s" className="form-text">
                    We'll never share your information with anyone else.
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
              <hr />
              <p className="text-center">
                Don't have an account? Sign up <Link to={"/signup"}>here</Link>.
              </p>
            </div>
            {/* panel nav */}
          </div>
          <br />
          {/* content */}
        </div>
        {/* content */}
      </div>
      {/* main body */}

      <div className="footer-container">
        {/* content */}
        <div className="container">
          {/* other */}
          <SiteLinks />
          {/* other */}
          <br />
          {/* footer */}
          <Footer />
          {/* footer */}
        </div>
        {/* content */}
      </div>
      {/* body */}
    </div>
  );
};

export default LogIn;
