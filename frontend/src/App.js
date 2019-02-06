import React, { Component } from 'react';
import Signup from './views/signup'
import Login from './views/login'
import Home from './views/home'
import ButtonAppBar from './views/general/header';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authentication';

if(localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if(decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = '/login'
  }
}

class App extends Component {
  render() {
    return (
    <Provider store = { store }>
    	<Router>
      	<div>
          <ButtonAppBar/>
      		<Route exact path="/" component={Home} />
      		<Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
      	</div>
    	</Router>
    </Provider>
    );
  }
}

export default App;
