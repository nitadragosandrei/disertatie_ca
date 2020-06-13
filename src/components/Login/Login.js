import React, { useState, Component } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "./Login.css";
import { useHistory } from "react-router-dom";
import { useAppContext } from "../../libs/contextLib";
import { Auth } from "aws-amplify";
import LoaderButton from '../LoaderButton/LoaderButton';
import { onError } from "../../libs/errorLib";
import { useFormFields } from "../../libs/hooksLib";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

export default function Login() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const { userHasAuthenticated } = useAppContext();
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  const [fields, handleFieldChange] = useFormFields({
    email: "",
    password: ""
  });
  function validateForm() {
    return fields.email.length > 0 && fields.password.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
  try {
    await Auth.signIn(fields.email, fields.password);
    userHasAuthenticated(true);
    history.push("/");
  } catch (e) {
    onError(e);
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
            value={fields.email}
            onChange={handleFieldChange}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <FormLabel>Password</FormLabel><br></br>
          <FormControl
            value={fields.password}
            onChange={handleFieldChange}
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
