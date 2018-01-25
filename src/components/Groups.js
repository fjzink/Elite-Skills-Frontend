import React, { Component } from 'react';
import Group from './Group';
import axios from 'axios';

class Groups extends Component {
  constructor(props) {
    super(props);

    this.state = {
      groups: []
    };
  }

  getGroups = function getGroups() {
    let authToken = "Bearer " + localStorage.getItem('jwt');
    axios({
      url: 'http://localhost:3000/groups',
      method: 'get',
      headers: {'Authorization': authToken, 'Content-Type': 'application/json'}
    })
    .then((response) => {
      this.setState({groups: response.data});
    })
    .catch((error) => (console.log(error)));
  }

  componentDidMount() {
    this.getGroups();
  }

  render() {
    return (
      <div className="Groups">
        {this.state.groups.map((group, index) => {
          return (
            <Group
            key={index}
            bsStyle={"primary"}
            title={group.group}
            description={group.description}
            groupId={group.id}
            />
          );
        })}
      </div>
    );
  }
}

export default Groups;