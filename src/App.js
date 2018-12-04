import React, { Component } from 'react';
import Signup from './views/signup'

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1 style= {{ textAlign:'center'}}> L'académie pour tous </h1>
      <h1 style= {{ textAlign:'center'}}> Inscription </h1>

      <Signup/>

      </div>
    );
  }
}

export default App;
