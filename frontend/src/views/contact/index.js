import React from 'react';
import Form from './components/form.component'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { loginUser } from '../../actions/authentication'


class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email:'',
      message:'',
      errors: {}
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
     this.setState({
            [e.target.name]: e.target.value
        })
    
    }

   // handleSubmit(e) {
   //      e.preventDefault();
   //      const user = {
   //          email: this.state.email,
   //          message: this.state.message,  
   //      }
   //      this.props.loginUser(user);
   //      //console.log(user);
   //  }
    
   //  componentDidMount() {
   //      if(this.props.auth.isAuthenticated) {
   //          this.props.history.push('/');
   //      }
   //  }

   //  componentWillReceiveProps(nextProps) {
   //      if(nextProps.auth.isAuthenticated) {
   //          this.props.history.push('/')
   //      }
   //      if(nextProps.errors) {
   //          this.setState({
   //              errors: nextProps.errors
   //          });
   //      }
   //  }

    render() {
      const { errors } = this.state;
      return (
          <div>
            <h1 
            style={{fontFamily:'Dancing Script',fontSize:'50px', textAlign:'center'}}>
            Contactez-nous
            </h1>
              <Form
              email={this.state.email}
              message={this.state.message}
              onChange={this.handleInputChange}
              onSubmit={this.handleSubmit}
              errors={this.state.errors}
              />
          </div>

      );
    }
  }

export default Contact