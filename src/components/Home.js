import React, { Component } from 'react';
import './Home.css'

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jwt: this.props.token
    };
  }

  render() {
    return (
      <div className="Home">
        <h1>Home</h1>
      </div>
    );
  }
}

export default Home;