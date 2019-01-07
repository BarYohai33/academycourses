import React from 'react';
import Form from './components/form.component'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { signupUser } from '../../actions/authentication'


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
            [e.target.name]: e.target.value
        })
    
    }

   handleSubmit(e) {
        e.preventDefault();
        const user = {
            name: this.state.firstname,
            lastname: this.state.lastname,
            city: this.state.city,
            email: this.state.email,
            password: this.state.password,
            password_confirm: this.state.passwordRepeat
        }
        this.props.signupUser(user, this.props.history);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

  render() {
    const { errors } = this.state;
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
      errors={this.state.errors}
      />

    );
  }
}

Signup.propTypes = {
    signupUser: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    errors: state.errors
});

export default connect(mapStateToProps,{ signupUser })(withRouter(Signup))