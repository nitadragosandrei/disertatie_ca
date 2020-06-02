import React, { useState, Component } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "./Login.css";
import { Auth } from "aws-amplify";


// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

export default class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            email : '',
            password : '',
            loggedIn : false
        };
        this.handleSubmit = this.handleSubmit.bind(this);

    }

     validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
      }
    
    async handleSubmit(event ) {
        
        event.preventDefault();
     
     
        try {
          await Auth.signIn(this.state.email,this.state.password);
        
          alert("Logged in");
        } catch (e) {

          alert(e.message);
        }
      }
     handleEmailChange = (event) => {
        const {name: email, value} = event.target;
        this.setState({
            email: value
          });
     }
     handlePasswordChange = (event) => {
        const {name: password, value} = event.target;
        this.setState({
            password: value
          });
     }
      render(){
          return (
        <div className="Login">
          <form onSubmit={this.handleSubmit}>
            <FormGroup controlId="email" bsSize="large">
              <FormLabel>Email</FormLabel>
              <FormControl
                autoFocus
                type="email"
                value={this.state.email}
                onChange={this.handleEmailChange}
                {... console.log(this.state)}
              />
            </FormGroup>
            <FormGroup controlId="password" bsSize="large">
              <FormLabel>Password</FormLabel>
              <FormControl
                 value={this.state.password}
                onChange={this.handlePasswordChange}
                type="password"
              />
            </FormGroup>
            <Button block bsSize="large" disabled={!this.validateForm()} type="submit">
              Login
            </Button>
          </form>
        </div>
      );
    }
    
}