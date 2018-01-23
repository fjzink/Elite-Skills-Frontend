import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel, PageHeader } from 'react-bootstrap';
import axios from 'axios';
import './Login.css'


class Login extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      email: "",
      password: "",
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  sendToken = (token) => {
    this.props.setAuthentication(token);
  }

  handleSubmit = event => {
    event.preventDefault();
    axios.post('http://localhost:3000/user_token', {"auth": {
      "email": this.state.email,
      "password": this.state.password
    }}, {'Content-Type': 'application/json'})
    .then((response) => {
      this.sendToken(response.data.jwt);
      this.props.history.push("/");
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="Login">
        <PageHeader>Login</PageHeader>
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
        </form>
      </div>
    );
  }
}

export default Login;
