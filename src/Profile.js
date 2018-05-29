import React, { Component } from 'react';
import './App.css';
import Navigation from './Navigation';
import {
    Container,
    Row,
    Col,
    Button
} from 'reactstrap';


class Profile extends Component {
  render() {
    return (
      <div className="App img2">
        <Container className="nomargin">
          <Row>
            <Col>
            <Navigation />
            </Col>
            <Col>
            <p className="other">Other things will go here</p>
            </Col>
          </Row>  
          <Row>
            <Col>
              <footer className="navfooter">
              © 2018 BDABRK. All rights reserved.
              </footer>
            </Col>
          </Row>
        </Container>   
      </div>
    );
  }
}

export default Profile;