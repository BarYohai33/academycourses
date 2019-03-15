import React, { Component } from 'react';
import Signup from './views/signup';
import Login from './views/login';
import Home from './views/home';
import Contact from './views/contact';
import Prices from './views/prices';
import Advices from './views/advices';
import Courses from './views/courses/index';
import ChoiceCourse from './views/choiceCourse';
import workOnThisPage from './views/workOnThisPage';
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
import { getClasses } from './actions/classe';
import { getCourses } from './actions/course';

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

store.dispatch(getLastAdvice())
store.dispatch(getCourses())
store.dispatch(getClasses())
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
          <Route exact path="/choiceCourse" component={ChoiceCourse} />
          <Route exact path="/courses" component={Courses} />
          <Route exact path="/workOnThisPage" component={workOnThisPage} />
          <Route exact path="/prout" component={Courses} />
          <Footer/>
      	</div>
    	</Router>
    </Provider>
    );
  }
}

export default App;
