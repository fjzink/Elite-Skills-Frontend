import React, { Component } from 'react';
import Skill from './Skill'
import axios from 'axios';
import './Skills.css';

class Skills extends Component {
  constructor(props) {
    super(props);

    this.state = {
      skills: []
    };
  }

  getSkills = function getSkills() {
    let authToken = "Bearer " + localStorage.getItem('jwt');
    axios({
      url: `http://localhost:3000/groups/${this.props.match.params.group}/skills`,
      method: 'get',
      headers: {'Authorization': authToken, 'Content-Type': 'application/json'}
    })
    .then((response) => {
      this.setState({skills: response.data});
    })
    .catch((error) => (console.log(error)));
  }

  componentDidMount() {
    this.getSkills();
  }

  render() {
    return (
      <div className="Skills">
        {this.state.skills.map((skill, index) => {
          return(
            <Skill
              key={index}
              title={skill.skill}
              description={skill.description}
              skillId={skill.id}
              bsStyle="success"
            />
          );
        })}
      </div>
    );
  }
}

export default Skills;

