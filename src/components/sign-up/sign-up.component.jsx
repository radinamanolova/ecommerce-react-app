import React from 'react';
import { connect } from 'react-redux';
import FormInput from '../form-input/form-input.component';
import { signUpStart } from '../../redux/user/user.actions';
import { SignUpContainer, SignUpTitle, SignUpButton } from './sign-up.styles';

class SignUp extends React.Component {
  constructor () {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { signUpStart } = this.props;
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    signUpStart({ displayName, email, password });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <SignUpContainer>
        <SignUpTitle>I do not have an account yet</SignUpTitle>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={ this.handleSubmit }>
          <FormInput
            type="text"
            name="displayName"
            value={ displayName }
            onChange={ this.handleChange }
            label="Username"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={ email }
            onChange={ this.handleChange }
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={ password }
            onChange={ this.handleChange }
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={ confirmPassword }
            onChange={ this.handleChange }
            label="Confirm Password"
            required
          />
          <SignUpButton type="submit">SIGN UP</SignUpButton>
        </form>
      </SignUpContainer>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});

export default connect(null, mapDispatchToProps)(SignUp);