import { gql, useMutation } from "@apollo/client";

import Cartcart from "../layout/Cartcart";
import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";
import NavPanel from "../layout/NavPanel";
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

const SignUp = () => {
  const [register, { data, loading, error }] = useMutation(REGISTER_USER);
  console.log(data);

  if (loading) return "Submitting...";
  if (error) return `Submission error! ${error.message}`;

  return (
    <div className="sign-up">
      {/* body */}
      <div className="navigation-container">
        {/* content */}
        <div className="container">
          {/* navbar */}
          <Navbar />
          {/* navbar */}

          <br />

          <div className="set-container">
            {/* cartcart */}
            <Cartcart />
            {/* cartcart */} {/* other */}
            <div className="other">
              <h3>Vigil surveillance, your kind of surveillance</h3>
            </div>
            {/* other */}
          </div>
        </div>
        {/* content */}
      </div>

      {/* main body */}
      <div className="container">
        {/* content */}
        <div className="container-fluid">
          {/* content */}
          <div className="panel">
            {/* panel nav */}
            <div className="panel-nav">
              <NavPanel />
            </div>
            <br />
            <div className="panel-content">
              <h3 className="text-center">Sign up</h3>
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
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="your email address"
                  />
                </div>
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
                    Your username and email should be the same.
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="password1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password1"
                    className="form-control"
                    placeholder="***********"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password2" className="form-label">
                    Confirm password
                  </label>
                  <input
                    type="password"
                    name="password2"
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

export default SignUp;
