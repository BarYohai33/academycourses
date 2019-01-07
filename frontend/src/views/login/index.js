import React from 'react';
import Form from './components/form.component'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { loginUser } from '../../actions/authentication'

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
        //console.log(user);
    }

    componentWillReceiveProps(nextProps) {

        if(nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    render() {
      const {errors} = this.state;
      return (
        <Form
        email={this.state.email}
        password={this.state.password}
        onChange={this.handleInputChange}
        onSubmit={this.handleSubmit}
        errors={this.state.errors}
        />

      );
    }
  }
  
Login.propTypes = {
    errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    errors: state.errors
})
export default connect(mapStateToProps,{ loginUser })(withRouter(Login))