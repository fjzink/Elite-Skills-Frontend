import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './components/Login';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Signup from './components/Signup';
import Groups from './components/Groups';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.setAuthentication = this.setAuthentication.bind(this);
    this.userLogout = this.userLogout.bind(this);

    this.state = {
      jwt: ""
    };
  }

  componentDidMount() {
    let token = localStorage.getItem('jwt');
    if (token) {
      this.setState({jwt: token});
    }
  }

  setAuthentication = (token) => {
    this.setState({jwt: token});
    localStorage.setItem('jwt', token)
  }

  userLogout = () => {
    this.setState({jwt: ""});
    localStorage.setItem('jwt', "")
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Navigation
              token={this.state.jwt}
              userLogout={this.userLogout}
            />
            <Route exact path="/"
              render={(props) => <Home {...props} token={this.state.jwt}/>}
            />
            <Route exact path="/signup"
              render={(props) => <Signup {...props} setAuthentication={this.setAuthentication}/>}
            />
            <Route exact path="/login"
              render={(props) => <Login {...props} setAuthentication={this.setAuthentication}/>}
            />
            <Route exact path="/groups"
              render={(props) => <Groups {...props} token={this.state.jwt}/>}
            />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
