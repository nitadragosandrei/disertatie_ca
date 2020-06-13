import React, { useState, Component } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "./Login.css";
import { useHistory } from "react-router-dom";
import { useAppContext } from "../../libs/contextLib";
import { Auth } from "aws-amplify";
import LoaderButton from '../LoaderButton/LoaderButton';

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { userHasAuthenticated } = useAppContext();
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
  try {
    await Auth.signIn(email, password);
    userHasAuthenticated(true);
    history.push("/");
  } catch (e) {
    alert(e.message);
    setIsLoading(false);
  }
  }

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="email" bsSize="large">
          <FormLabel>Email</FormLabel><br></br>
          <FormControl
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <FormLabel>Password</FormLabel><br></br>
          <FormControl
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        <LoaderButton
  block
  type="submit"
  bsSize="large"
  isLoading={isLoading}
  disabled={!validateForm()}
>
  Login
</LoaderButton>
      </form>
    </div>
  );
}
