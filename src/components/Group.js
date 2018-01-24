import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import './Group.css'

class Group extends Component {
  render() {
    return(
      <div className="Group">
        <Panel bsStyle={this.props.bsStyle}>
          <Panel.Heading>
            <Panel.Title>{this.props.title}</Panel.Title>
          </Panel.Heading>
          <Panel.Body>{this.props.description}</Panel.Body>
        </Panel>
      </div>
    );
  }
}

export default Group;