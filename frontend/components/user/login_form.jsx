const React = require('react');
import { browserHistory } from 'react-router';
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
    SessionActions.login({username: "lazypanda", password: "eatallday"});
  },

  redirectIfLoggedIn () {
    if (SessionStore.isUserLoggedIn()) {
      browserHistory.push('/');
    }
  },

  updateProps (property) {
    return (e) => this.setState({ [property]: e.target.value });
  },

  render () {
    let submitText, formHeader, formInfo;
    if (this.formType() === "login") {
      formHeader = "Log In to TravelingPx";
      submitText = "Log in";
    } else {
      formHeader = "Join TravelingPx";
      formInfo = "Upload your amazing travels!";
      submitText = "Sign Up";
    }

    return (
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

            <input type="submit" className="button submit-button" value={submitText} />
          </form>

          <button className="button submit-button"
            onClick={this._handleGuestLogin}>
            Guest Login
          </button>
        </div>
      </div>
    );
  }
});

module.exports = LoginForm;
