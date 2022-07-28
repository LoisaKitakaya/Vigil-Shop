import { gql, useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";

const TOKEN_AUTH = gql`
  mutation TokenAuth($username: String!, $password: String!) {
    tokenAuth(username: $username, password: $password) {
      token
      payload
      refreshToken
      refreshExpiresIn
    }
  }
`;

const Signin = ({ loader }) => {
  const [show, setShow] = useState(false);

  let navigate = useNavigate();

  const [tokenAuth, { data, loading, error }] = useMutation(TOKEN_AUTH);

  if (data) {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");

    localStorage.setItem("token", data.tokenAuth.token);
    localStorage.setItem("refreshToken", data.tokenAuth.refreshToken);
  }

  if (loading)
    return (
      <div className="App-sub-container-2">
        <div className="load-and-error">
          <img src={loader} alt="loader" />
        </div>
        <br />
        <br />
      </div>
    );

  if (error)
    return (
      <div className="App-sub-container-2">
        <div className="load-and-error">
          <h1>Error: {error.message}</h1>
        </div>
        <br />
        <br />
      </div>
    );

  return (
    <div>
      <form
        className="card review-form"
        onSubmit={(e) => {
          e.preventDefault();

          tokenAuth({
            variables: {
              username: e.target.username.value,
              password: e.target.password.value,
            },
          });

          setShow(true);

          setTimeout(() => navigate("/allproducts", { replace: true }), 3000);
        }}
      >
        <br />
        <h4 className="text-center">Log in to your Vigil account</h4>
        <br />
        <div className="form-floating mb-3">
          <input
            type="text"
            name="username"
            className="form-control"
            placeholder="e.g. JohnDoe"
            required
          />
          <label htmlFor="floatingInput">Username</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="************"
            required
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <br />
        <button type="submit" className="btn btn-outline-dark container-fluid">
          Log in
        </button>
        <br />
        <div className="form-text text-center">
          <em>
            We'll never share your information with anyone else. Your privacy is
            our priority.
          </em>
        </div>
      </form>
      <ToastContainer className="p-3 toast-position text-light">
        <Toast
          onClose={() => setShow(false)}
          show={show}
          delay={3000}
          autohide
          bg="success"
        >
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Success</strong>
            <small>Just now</small>
          </Toast.Header>
          <Toast.Body>
            <i className="bi bi-check-circle-fill"></i> Success. You are now
            logged in. Redirecting...
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
};

export default Signin;
