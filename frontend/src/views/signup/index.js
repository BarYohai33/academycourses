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
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            city: this.state.city,
            email: this.state.email,
            password: this.state.password,
            passwordRepeat: this.state.passwordRepeat
        }
        this.props.signupUser(user, this.props.history);
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.auth.isAuthenticated) {
            this.props.history.push('/')
        }
        if(nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    componentDidMount() {
        if(this.props.auth.isAuthenticated) {
            this.props.history.push('/');
        }
    }

  render() {
    const { errors } = this.state;
    return (
      <div>
        <h1 style={{textAlign:'center',}}> Inscription </h1>
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
      </div>

    );
  }
}

Signup.propTypes = {
    signupUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps,{ signupUser })(withRouter(Signup))