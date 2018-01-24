import React, { Component } from 'react';
import Group from './Group';

class Groups extends Component {
  render() {
    return (
      <div className="Groups">
        {[<Group key="1" bsStyle="primary"/>, <Group key="2" bsStyle="primary"/>, <Group key="3" bsStyle="primary"/>]}
      </div>
    );
  }
}

export default Groups;