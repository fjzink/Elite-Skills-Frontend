import React, { Component } from 'react';
import Group from './Group';
import axios from 'axios';

class Groups extends Component {
  getGroups = function getGroups() {
    let authToken = "Bearer " + this.props.token;
    console.log("authToken: " + authToken);

    axios({
      url: 'http://localhost:3000/groups',
      method: 'get',
      headers: {'Authorization': authToken, 'Content-Type': 'application/json'}
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => (console.log(error)));
  }

  componentDidMount() {
    this.setState({jwt: this.props.token});
    console.log(this.props.token)
    this.getGroups();
  }

  render() {
    return (
      <div className="Groups">
        {[<Group key="1" bsStyle="primary"/>, <Group key="2" bsStyle="primary"/>, <Group key="3" bsStyle="primary"/>]}
        <p>{this.props.token}</p>
      </div>
    );
  }
}

export default Groups;