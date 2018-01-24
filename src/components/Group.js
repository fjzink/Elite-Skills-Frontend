import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import './Group.css'

class Group extends Component {
  render() {
    return(
      <div className="Group">
        <Panel key={this.props.key} bsStyle={this.props.bsStyle}>
          <Panel.Heading>
            <Panel.Title>Group</Panel.Title>
          </Panel.Heading>
          <Panel.Body>Description</Panel.Body>
        </Panel>
      </div>
    );
  }
}

export default Group;