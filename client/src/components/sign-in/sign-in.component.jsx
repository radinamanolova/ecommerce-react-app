import React from 'react';
import { connect } from 'react-redux';
import FormInput from '../form-input/form-input.component';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';
import { SignInContainer, SignInTitle, ButtonsBarContainer, SignInButton, SignInGoogleButton } from './sign-in.styles';

class SignIn extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { emailSignInStart } = this.props;
    const { email, password } = this.state;

    emailSignInStart(email, password);
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { googleSignInStart } = this.props;
    return (
      <SignInContainer>
        <SignInTitle>I already have an account</SignInTitle>
        <span>Sign in with your email and password</span>

        <form onSubmit={ this.handleSubmit }>
          <FormInput
            type="email"
            name="email"
            value={ this.state.email }
            handleChange={ this.handleChange }
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={ this.state.password }
            handleChange={ this.handleChange }
            label="Password"
            required
          />
          <ButtonsBarContainer>
            <SignInButton type="submit">
              Sign in
            </SignInButton>
            <SignInGoogleButton type="button" onClick={ googleSignInStart } isGoogleSignIn>
              Sign in with Google
            </SignInGoogleButton>
          </ButtonsBarContainer>
        </form>
      </SignInContainer>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);