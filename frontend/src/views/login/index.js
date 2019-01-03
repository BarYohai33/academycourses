import React from 'react';
import Form from './components/form.component'

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email:'',
      password:'',
      errors: {}
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
     this.setState({
            [e.target.name]: e.target.value
        })
    
    }

   handleSubmit(e) {
        e.preventDefault();
        const user = {
            email: this.state.email,
            password: this.state.password,  
        }
        console.log(user);
    }

  render() {
    return (
      <Form
      email={this.state.email}
      password={this.state.password}
      onChange={this.handleInputChange}
      onSubmit={this.handleSubmit}
      />

    );
  }
}

export default Login;