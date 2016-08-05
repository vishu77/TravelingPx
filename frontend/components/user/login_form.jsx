const React = require('react');
import { Link, browserHistory } from 'react-router';
const ErrorActions = require('../../actions/error_actions');
const SessionActions = require('../../actions/session_actions');
const SessionStore = require('../../stores/session');

const LoginForm = React.createClass({
  getInitialState () {
    return { username: "", password: "" };
  },

  componentDidMount() {
    this.sessionListener = SessionStore.addListener(this.redirectIfLoggedIn);
  },

  componentWillUnmount() {
    this.sessionListener.remove();
  },

  formType() {
    return this.props.location.pathname.slice(1);
  },

  _handleSubmit (e) {
    e.preventDefault();

    if (this.formType() === "login") {
      SessionActions.login(this.state);
    } else {
      SessionActions.signup(this.state);
    }
  },

  _handleGuestLogin (e) {
    e.preventDefault();
    SessionActions.login({username: "flypuppy", password: "iamsofly"});
  },

  redirectIfLoggedIn () {
    if (SessionStore.isUserLoggedIn()) {
      browserHistory.push('/signup');
    }
  },

  updateProps (property) {
    return (e) => this.setState({ [property]: e.target.value });
  },

  render () {
    let navlink, submitText, formHeader, formInfo;
    if (this.formType() === "login") {
      navlink = <Link to="/signup">Sign Up</Link>;
      formHeader = "Log In to PxPerfect";
      submitText = "Log in";
    } else {
      navlink = <Link to="/login">Log in</Link>;
      formHeader = "Join PxPerfect";
      formInfo = "Upload your amazing travels!";
      submitText = "Sign Up";
    }

    return (
      // <div className="login-signup-page">
        <div className="login-signup-box">
          <div>
            <h2>{formHeader}</h2>
            <h3>{formInfo}</h3>

            <form onSubmit={this._handleSubmit} className="login-form">
              <label>
                Username
                <div>
                  <input type="text" className="form-inputs"
                    value={this.state.username}
                    onChange={this.updateProps("username")} />
                </div>
              </label>

              <label>
                Password
                <div>
                  <input type="password" className="form-inputs"
                    value={this.state.password}
                    onChange={this.updateProps("password")} />
                </div>
              </label>

              <input type="submit" className="submit-button" value={submitText} />
            </form>

            <button className="submit-button"
              onClick={this._handleGuestLogin}>Guest Login</button>
          </div>
        </div>
      // </div>
    );
  }
});

module.exports = LoginForm;
