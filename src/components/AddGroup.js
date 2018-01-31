import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import axios from 'axios';


class AddGroup extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      title: "",
      description: "",
    };
  }

  validateForm() {
    return this.state.title.length > 0 && this.state.description.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    let authToken = "Bearer " + localStorage.getItem('jwt');
    event.preventDefault();
    axios({
      url: 'http://localhost:3000/groups',
      method: 'post',
      data: {
        group: {
          "group": this.state.title,
          "description": this.state.description
        }
      },
      headers: {'Authorization': authToken, 'Content-Type': 'application/json'}
    })
    .then((response) => {
      this.props.addGroup(response.data);
      this.props.handleClose();
    })
    .catch((error) => (console.log(error)));
  }

  render() {
    return (
      <div className="AddGroup">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="title" bsSize="large">
            <ControlLabel>Title</ControlLabel>
            <FormControl
              autoFocus
              type="text"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="description" bsSize="large">
            <ControlLabel>Description</ControlLabel>
            <FormControl
              value={this.state.description}
              onChange={this.handleChange}
              type="text"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Submit
          </Button>
        </form>
      </div>
    );
  }
}

export default AddGroup;
