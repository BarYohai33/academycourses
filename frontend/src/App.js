import React, { Component } from 'react';
import Signup from './views/signup'
import Login from './views/login'
import Home from './views/home'
import Contact from './views/contact'
import Prices from './views/prices'
import Advices from './views/advices'
import choiceCourse from './views/choiceCourse'
import workOnThisPage from './views/workOnThisPage'
import ButtonAppBar from './views/general/header';
import Footer from './views/general/footer';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authentication';
import { getLastAdvice } from './actions/advice';

store.dispatch(getLastAdvice()) 
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
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/prices" component={Prices} />
          <Route exact path="/advices" component={Advices} />
          <Route exact path="/choiceCourse" component={choiceCourse} />
          <Route exact path="/workOnThisPage" component={workOnThisPage} />
          <Footer/>
      	</div>
    	</Router>
    </Provider>
    );
  }
}

export default App;
