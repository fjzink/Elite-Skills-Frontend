import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Panel } from 'react-bootstrap';
import './Group.css'

class Group extends Component {
  formatLink = () => '/groups/' + this.props.groupId.toString() + '/skills'

  render() {
    return(
      <div className="Group">
        <Panel bsStyle={this.props.bsStyle}>
          <Panel.Heading>
            <Panel.Title>{this.props.title} <Link to={this.formatLink()}>See Skills>>></Link></Panel.Title>
          </Panel.Heading>
          <Panel.Body>{this.props.description}</Panel.Body>
        </Panel>
      </div>
    );
  }
}

export default Group;