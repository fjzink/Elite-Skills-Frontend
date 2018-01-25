import React, { Component } from 'react';
import {
  Button,
  FormGroup,
  FormControl,
  ControlLabel,
  PageHeader
} from 'react-bootstrap';
import axios from 'axios';
import './Signup.css';

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }

  validateForm() {
    return (
      this.state.email.length > 0 &&
      this.state.password.length > 0 &&
      this.state.username.length > 0 &&
      this.state.password === this.state.confirmPassword
    );
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    axios.post('http://localhost:3000/users', {"user": {
      "username": this.state.username,
      "email": this.state.email,
      "password": this.state.password
    }}, {'Content-Type': 'application/json'})
    .then((response) => {
      this.props.history.push("/");
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    return(
      <div className="Signup">
        <PageHeader>Signup</PageHeader>
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="username" bsSize="large">
            <ControlLabel>Username</ControlLabel>
            <FormControl
              autoFocus
              type="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </FormGroup>
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
          <FormGroup controlId="confirmPassword" bsSize="large">
            <ControlLabel>Confirm Password</ControlLabel>
            <FormControl
              value={this.state.confirmPassword}
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
              Signup
          </Button>
        </form>
      </div>
    );
  }
}

export default Signup;