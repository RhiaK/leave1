import React, { Component } from 'react';
import './App.css';
import {
    Form,
    FormGroup,
    Input,
    Container,
    Row,
    Col,
    Button
} from 'reactstrap';


class SignInPage extends Component {
  render() {
    return (
      <div className="App img">
        <Container>
          <Row>
            <Col>
              <h1 className="title">Leave!</h1>
            </Col>
          </Row>
          <Row className="justify-content-center">
          <Form className="form">   
            <FormGroup> 
              <Input 
                type="email"
                name="email"
                placeholder="Enter your email address"
              />
            </FormGroup>
            <FormGroup>  
              <Input
                type="password"
                name="password"
                placeholder="Enter your password"
              />
            </FormGroup>
            <Button className="SIB">Sign In!</Button>
          </Form> 
          </Row> 
        </Container> 
        <Container>
          <Row>
            <Col>
              <footer className="signinfoot">
              © 2018 BDABRK. All rights reserved.
              </footer>
            </Col>
          </Row>
        </Container>   
      </div>
    );
  }
}

export default SignInPage;