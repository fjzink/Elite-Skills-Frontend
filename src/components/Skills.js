import React, { Component } from 'react';
import './Skills.css';

class Skills extends Component {

  render() {
    return (
      <div className="Skills">
        <h3>{this.props.match.params.group}</h3>
        <p>Skills to pay the bills.</p>
      </div>
    );
  }
}

export default Skills;