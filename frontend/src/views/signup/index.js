import React from 'react';
import Form from './components/form.component'

class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lastname:'',
      firstname:'',
      city:'',
      email:'',
      password:'',
      passwordRepeat:'',
      errors: {}
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
        this.setState({
            lastname: e.target.value
        })
    
    }

   handleSubmit(e) {
        e.preventDefault();
        const user = {
            lastname: this.state.lastname,
            firstname: this.state.firstname,
            city: this.state.city,
            email: this.state.email,
            password: this.state.password,
            passwordRepeat: this.state.passwordRepeat
        }
        console.log(user);
    }

  render() {
    return (
      <Form
      lastname={this.state.lastname}
      firstname={this.state.firstname}
      city={this.state.city}
      email={this.state.email}
      password={this.state.password}
      passwordRepeat={this.state.passwordRepeat}
      onChange={this.handleInputChange}
      onSubmit={this.handleSubmit}
      />

    );
  }
}

export default Signup;