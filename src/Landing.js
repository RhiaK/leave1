import React, { Component } from 'react';
import './App.css';
import {
    Container,
    Row,
    Col,
    Button
} from 'reactstrap';


class LandingPage extends Component {
  render() {
    return (
      <div className="App img">
        <Container>
          <Row>
            <Col>
              <h1 className="title">Leave!</h1>
            </Col>
          </Row>
          <Row>
          	<Col className="text">
          		<p>Have you ever wondered just how long 
          		it will take you to get to work in the morning, 
          		but you didn't want to take the time to look it 
          		up, every, single morning? Well that is exactly 
          		what Leave! is for. Leave! will send you a text 
          		message prior to the time that you need to leave 
          		to get to your destination on time, taking traffic 
          		and weather into account!</p>
          		<h3>Join Leave! Today</h3>
          	</Col>
          </Row>		
          <Row className="justify-content-center">
            <Button className="but">Sign Up!</Button>
            <Button className="but">Sign In!</Button>
          </Row> 
        </Container> 
        <Container>
          <Row>
            <Col>
              <footer>
              © 2018 BDABRK. All rights reserved.
              </footer>
            </Col>
          </Row>
        </Container>   
      </div>
    );
  }
}

export default LandingPage;