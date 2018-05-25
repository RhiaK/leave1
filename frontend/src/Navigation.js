import React from 'react';
import { Nav, NavItem, NavLink, Button, Row } from 'reactstrap';
import './App.css'

class Navigation extends React.Component {
  render() {
    return (
      <div className="nav">
        <Row className="justify-content-center">
          <p className="navtitle">Leave!</p>
          <Nav vertical>
            <NavItem>
              <NavLink className="navitem" href="#">Dashboard</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="navitem" href="#">Profile</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="navitem navbottom" href="#">Destinations</NavLink>
            </NavItem>
            <Button className="navbut">Sign Out</Button>
          </Nav>
        </Row>
      </div>
    );
  }
}

export default Navigation;