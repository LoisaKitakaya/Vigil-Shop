import { gql, useMutation } from "@apollo/client";
import { Link } from "react-router-dom";

import pageTitle from "../components/PageTitle";

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
  pageTitle("vigil | Sign in");

  const [register, { data, loading, error }] = useMutation(REGISTER_USER);
  console.log(data);

  if (loading) return "Submitting...";
  if (error) return `Submission error! ${error.message}`;

  return <h1>Sign in</h1>;
};

export default SignUp;
