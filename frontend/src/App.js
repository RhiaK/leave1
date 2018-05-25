
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import LandingPage from './Landing';
import SignUpPage from './Signup';
import SignInPage from './Signin';

import './App.css';

import * as routes from './constants/routes';

class App extends Component {
  render() {

    return (
      <div>
        <Router>
          <div>
            <Route
              exact path={routes.LANDING}
              component={() => <LandingPage />}
            />
            <Route
              exact path={routes.SIGN_UP}
              component={() => <SignUpPage />}
            />
            <Route
              exact path={routes.SIGN_IN}
              component={() => <SignInPage />}
            /> 
          </div> 
        </Router>
      </div>  
    );
  }
}



export default App;