import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import RouteNavItem from './RouteNavItem';
import './Navigation.css'

class Navigation extends Component {
  handleLogout = (e) => {
    // e.preventDefault();
    this.props.userLogout();
  }

  render() {
    return(
      <div className="Navigation">
        <Navbar fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Elite Skills</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Nav pullRight>
            {(this.props.token.length !== 0)
              ? <NavItem onClick={this.handleLogout} href="/login">Logout</NavItem>
              : [
                  <RouteNavItem key={1} href="/signup">
                    Signup
                  </RouteNavItem>,
                  <RouteNavItem key={2} href="/login">
                    Login
                  </RouteNavItem>
            ]}
          </Nav>
        </Navbar>
      </div>
    );
  }
}

// {(() => {
//                 if (this.props.token) {
//                   return <NavItem eventKey={1} onClick={this.logout} href="/">Logout</NavItem>;
//                 } else {
//                   return <RouteNavItem href="/login">Login</RouteNavItem>;
//                 }
//               })()}

export default Navigation;