import { gql, useMutation } from "@apollo/client";
import { useState } from "react";

import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";

const REGISTER_USER = gql`
  mutation REGISTER_USER(
    $username: String!
    $email: String!
    $firstname: String!
    $secondname: String!
    $password1: String!
    $password2: String!
  ) {
    registerUser(
      username: $username
      email: $email
      firstname: $firstname
      secondname: $secondname
      password1: $password1
      password2: $password2
    ) {
      user {
        username
        email
        isActive
      }
    }
  }
`;

const Register = ({ loader }) => {
  const [show, setShow] = useState(false);

  const [registerUser, { data, loading, error }] = useMutation(REGISTER_USER);

  if (data) {
    console.log("Account creation success.You can now log in.");
  }

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

          registerUser({
            variables: {
              username: e.target.username.value,
              email: e.target.email.value,
              firstname: e.target.firstname.value,
              secondname: e.target.secondname.value,
              password1: e.target.password1.value,
              password2: e.target.password2.value,
            },
          });

          setShow(true);
        }}
      >
        <br />
        <h4 className="text-center">Create a new Vigil account</h4>
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
            type="email"
            name="email"
            className="form-control"
            placeholder="name@example.com"
            required
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            name="firstname"
            className="form-control"
            placeholder="e.g. John"
            required
          />
          <label htmlFor="floatingInput">First name</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            name="secondname"
            className="form-control"
            placeholder="e.g. Doe"
            required
          />
          <label htmlFor="floatingInput">Second name</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="password"
            name="password1"
            className="form-control"
            placeholder="************"
            required
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="password"
            name="password2"
            className="form-control"
            placeholder="************"
            required
          />
          <label htmlFor="floatingPassword">Confirm password</label>
        </div>
        <br />
        <button type="submit" className="btn btn-outline-dark container-fluid">
          Register
        </button>
        <br />
        <div className="form-text text-center">
          <em>
            We'll never share your information with anyone else. Your privacy is
            our priority.
          </em>
        </div>
        {/* toasts */}
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
            <i className="bi bi-check-circle-fill"></i> Account creation
            success. You can now log in.
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
};

export default Register;
