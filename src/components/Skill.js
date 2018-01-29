import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Skill.css'


class Skill extends Component {
  formatLink = () => '/skills/' + this.props.skillId.toString() + '/metrics';

  render () {
    return (
      <div className="Skill">
        <Panel bsStyle={this.props.bsStyle}>
          <Panel.Heading>
            <Panel.Title>{this.props.title} <Link className="skill-link" to={this.formatLink()}>View Skill>></Link></Panel.Title>
          </Panel.Heading>
          <Panel.Body>{this.props.description}</Panel.Body>
        </Panel>
      </div>
    );
  }
}

export default Skill;