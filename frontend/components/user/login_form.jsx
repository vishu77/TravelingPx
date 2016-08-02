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

  formType() {
    return this.props.location.pathname.slice(1);
  },

  handleSubmit (e) {
    e.preventDefault();

    if (this.formType() === "login") {
      SessionActions.login(this.state);
    } else {
      SessionActions.signup(this.state);
    }
  },

  errors() {
    const errors = ErrorStore.errors(this.formType());
    const messages = errors.map( (errorMsg, i) => {
      return <li key={ i }>{ errorMsg }</li>;
    });

    return <ul>{ messages }</ul>;
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
      <div className="login-signup-box">
        {this.errors()}
        <div>
          <h3>{formHeader}</h3>

          <form onSubmit={this.handleSubmit} className="login-form">
            <label>
              Username
              <div>
                <input type="text" className="login-input"
                  value={this.state.username}
                  onChange={this.setUsername} />
              </div>
            </label>

            <label>
              Password
              <div>
                <input type="password" className="login-input"
                  value={this.state.password}
                  onChange={this.setPassword} />
              </div>
            </label>

            <input type="submit" className="submit-button" value={submitText} />
          </form>
        </div>
      </div>
    );
  }
});

module.exports = LoginForm;
