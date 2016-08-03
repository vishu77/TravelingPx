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
    this.sessionListener = SessionStore.addListener(this.redirectIfLoggedIn);
  },

  componentWillUnmount() {
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

  // errors() {
  //   const errors = ErrorStore.errors(this.formType());
  //   const messages = errors.map( (errorMsg, i) => {
  //     return <li key={ i }>{ errorMsg }</li>;
  //   });
  //
  //   return <ul>{ messages }</ul>;
  // },

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
      <div className="login-signup-box">
        <div>
          <h2>{formHeader}</h2>
          <h3>{formInfo}</h3>

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
