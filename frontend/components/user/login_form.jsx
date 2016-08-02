const React = require('react');
const SessionActions = require('../../actions/session_actions');
const SessionStore = require('../../stores/session');
const ErrorStore = require('../../stores/error');
const Link = require('react-router').Link;

const LoginForm = React.createClass({
  contextTypes: {
		router: React.PropTypes.object.isRequired
	},

  getInitialState () {
    return { username: "", password: "" };
  },

  componentDidMount() {
    this.errorListener = ErrorStore.addListener(this.forceUpdate.bind(this));
    this.sessionListener = SessionStore.addListener(this.redirectIfLoggedIn);
  },

  componentWillUnmount() {
    this.errorListener.remove();
    this.sessionListener.remove();
  },

  redirectIfLoggedIn () {
    if (SessionStore.isUserLoggedIn()) {
      this.context.router.push("/");
    }
  },

  setUsername (e) {
    this.setState({username: e.target.value});
  },

  setPassword (e) {
    this.setState({password: e.target.value});
  },

  handleSubmit (e) {
    e.preventDefault();

    if (this.props.location.pathname === "/login") {
      SessionActions.login(this.state);
    } else {
      SessionActions.signup(this.state);
    }
  },

  formType() {
    return this.props.location.pathname.slice(1);
  },

  render () {
    let navlink, submitText, formHeader;
    if (this.formType() === "login") {
      navlink = <Link to="/signup">Sign Up</Link>;
      formHeader = "Welcome, Please Log in to PxPerfect";
      submitText = "Log in";
    } else {
      navlink = <Link to="/login">Log in</Link>;
      formHeader = "Welcome, Please Sign Up to PxPerfect";
      submitText = "Sign Up";
    }
  
    return (
      <div className="login-signup-form">
        {this.state.errors}
        <h2>{formHeader}</h2>

        <form onSubmit={this.handleSubmit} className="login-form">
          <label>
            Username
            <input type="text"
              value={this.state.username}
              onChange={this.setUsername} />
          </label>

          <label>
            Password
            <input type="password"
              value={this.state.password}
              onChange={this.setPassword} />
          </label>

          <input type="submit" value={submitText} />
        </form>
      </div>
    );
  }
});

module.exports = LoginForm;
