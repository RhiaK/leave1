import React, { Component } from 'react';
import logo from './logo.svg';
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


class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Col>
              <h1>Leave!</h1>
            </Col>
          </Row>
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
        </Container>  
      </div>
    );
  }
}

export default App;
