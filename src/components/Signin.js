import { gql, useMutation } from "@apollo/client";
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

const Signin = ({ loader, errorRedirect }) => {
  const [show, setShow] = useState(false);

  const [tokenAuth, { data, loading, error }] = useMutation(TOKEN_AUTH);

  if (data) {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");

    localStorage.setItem("token", data.tokenAuth.token);
    localStorage.setItem("refreshToken", data.tokenAuth.refreshToken);
  }

  if (errorRedirect)
    return (
      <div
        className="alert alert-danger text-center toast-position-redirect"
        role="alert"
      >
        <h4>{errorRedirect}</h4>
      </div>
    );

  if (loading)
    return (
      <div className="text-center App-sub-container-2">
        <img src={loader} alt="loader" />
      </div>
    );

  if (error)
    return (
      <div className="alert alert-danger text-center" role="alert">
        <h4>Error: {error.message}</h4>
        <button
          className="btn btn-outline-primary btn-sm"
          onClick={() => window.location.reload(false)}
        >
          Try again
        </button>
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
          <Toast.Body>
            <i className="bi bi-check-circle-fill"></i> Success. You are now
            logged in.
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
};

export default Signin;
