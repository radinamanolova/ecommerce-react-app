import React, { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { GlobalStyle } from './global.styles';
import Header from './components/header/header.component';
import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';
import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const AboutUsPage = lazy(() => import('./pages/about/about.component'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));
const SignInAndSignUpPage = lazy(() => import('./pages/signin-and-signup/signin-and-signup.component'));

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <GlobalStyle />
        <Header />
        <ErrorBoundary>
          <Suspense fallback={ <Spinner /> }>
            <Switch>
              <Route exact path="/" component={ HomePage } />
              <Route path="/shop" component={ ShopPage } />
              <Route path="/aboutus" component={ AboutUsPage } />
              <Route exact path="/checkout" component={ CheckoutPage } />
              <Route
                exact
                path="/signin"
                render={ () =>
                  this.props.currentUser ? (
                    <Redirect to="/" />
                  ) : (
                      <SignInAndSignUpPage />
                    )
                }
              />
            </Switch>
          </Suspense>
        </ErrorBoundary>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
