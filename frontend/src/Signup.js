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


class SignUpPage extends Component {
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
                type="name"
                name="name"
                placeholder="Enter your name"
              />
            </FormGroup>    
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
            <FormGroup>
              <Input
                type="phone"
                name="phone"
                placeholder="Enter your phone number"
              />
            </FormGroup>
            <Button className="SUB">Sign Up!</Button>
          </Form> 
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

export default SignUpPage;
