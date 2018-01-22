import React, { Component } from 'react';
import Login from './components/Login'

class App extends Component {
  constructor() {
    super();

    this.setAuthentication = this.setAuthentication.bind(this);

    this.state = {
      jwt: ""
    };
  }

  setAuthentication = (token) => {
    this.setState({jwt: token});
  }

  render() {
    return (
      <div className="App">
        <Login
          setAuthentication = {this.setAuthentication}
        />
      </div>
    );
  }
}

export default App;
