import React, { Component } from 'react';
import Signup from './views/signup'
import Home from './views/home'
import ButtonAppBar from './views/general/header';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
  	<Router>
    	<div>
        <ButtonAppBar/>
    		<Route exact path="/" component={Signup} />
    		<Route exact path="/home" component={Home} />
    	</div>
  	</Router>
    );
  }
}

export default App;
