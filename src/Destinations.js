import React, { Component } from 'react';
import './App.css';
import Navigation from './Navigation';
import Show from './Show';
import {
    Container,
    Row,
    Col,
    Button,
    Form,
    FormGroup,
    Input
} from 'reactstrap';


class Dest extends Component {
  render() {
    return (
      <div className="App img2">
        <Container className="nomargin">
          <Row>
            <Col>
            <Navigation />
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col>
              <Form className="locform">
                <Row className="justify-content-center">    
                  <FormGroup>
                    <Col sm="12">
                      <Input
                        className="locwide" 
                        type="locname"
                        name="dest_title"
                        id="dest_title"
                        placeholder="Name your destination"
                      />
                    </Col>
                  </FormGroup>
                </Row>
                <Row className="justify-content-center">   
                  <FormGroup>
                    <Col sm="12">
                      <Input
                        className="locwide" 
                        type="address"
                        name="dest_add"
                        id="dest_add"
                        placeholder="Street address"
                      />
                    </Col>
                  </FormGroup>
                </Row>
                <Row>  
                  <FormGroup>
                    <Col sm={{ size: 12, order: 2, offset: 1 }}>
                      <Input 
                        type="city"
                        name="dest_city"
                        id="dest_city"
                        placeholder="City"
                      />
                    </Col>
                  </FormGroup>
                  <Col sm={{ size: 5, order: 2, offset: 0 }}> 
                  <FormGroup>
                      <Input type="select" name="dest_state" id="dest_state">
                        <option>State</option>
                        <option>Alabama</option>
                        <option>Alaska</option>
                        <option>Arizona</option>
                        <option>Arkansas</option>
                        <option>California</option>
                        <option>Colorado</option>
                        <option>Connecticut</option>
                        <option>Delaware</option>
                        <option>District of Columbia</option>
                        <option>Florida</option>
                        <option>Georgia</option>
                        <option>Hawaii</option>
                        <option>Idaho</option>
                        <option>Illinois</option>
                        <option>Indiana</option>
                        <option>Iowa</option>
                        <option>Kansas</option>
                        <option>Kentucky</option>
                        <option>Louisiana</option>
                        <option>Maine</option>
                        <option>Maryland</option>
                        <option>Massachusetts</option>
                        <option>Michigan</option>
                        <option>Minnesota</option>
                        <option>Michigan</option>
                        <option>Minnesota</option>
                        <option>Mississippi</option>
                        <option>Missouri</option>
                        <option>Montana</option>
                        <option>Nebraska</option>
                        <option>Nevada</option>
                        <option>New Hampshire</option>
                        <option>New Jersey</option>
                        <option>New Mexico</option>
                        <option>New York</option>
                        <option>North Carolina</option>
                        <option>North Dakota</option>
                        <option>Ohio</option>
                        <option>Oklahoma</option>
                        <option>Oregon</option>
                        <option>Pennsylvania</option>
                        <option>Rhode Island</option>
                        <option>South Carolina</option>
                        <option>South Dakota</option>
                        <option>Tennessee</option>
                        <option>Texas</option>
                        <option>Utah</option>
                        <option>Vermont</option>
                        <option>Virginia</option>
                        <option>Washington</option>
                        <option>West Virginia</option>
                        <option>Wisconsin</option>
                        <option>Wyoming</option>
                      </Input>
                  </FormGroup>
                </Col>  
                </Row>
                <Row className="justify-content-center">  
                  <FormGroup>
                    <Col sm={{ size: 8, offset: 1}}>
                      <Input 
                        type="zip"
                        name="dest_zip"
                        id="dest_zip"
                        placeholder="Zip Code"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup>
                    <Col sm={{ size: 12, offset: 0}}>
                      <Input
                        type="time"
                        name="dest_time"
                        id="dest_time"
                      />
                    </Col>
                  </FormGroup>      
                </Row>
                <Row className="justify-content-center">  
                  <FormGroup check row>
                    <Col sm={{ size: 10 }}>
                     <Button className="Dbut">Submit</Button>                  </Col>
                  </FormGroup>
                </Row>  
              </Form> 
            </Col>                         
          </Row>
        </Container>
          <Show />
        <Container className="foot">  
          <Row className="justify-content-center">
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

export default Dest;