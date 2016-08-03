const React = require('react');
const Link = require('react-router').Link;
const SessionStore = require('../stores/session');
const SessionActions = require('../actions/session_actions');
const ErrorStore = require('../stores/error');

const App = React.createClass({
  _handleLogOut (e) {
    e.preventDefault();
    SessionActions.logout();
  },

  componentDidMount () {
    this.errorListener = ErrorStore.addListener(this.forceUpdate.bind(this));
  },

  componentWillUnmount () {
    this.errorListener.remove();
  },

  errors() {
    const errors = ErrorStore.errors(this.props.location.pathname.slice(1));
    const messages = errors.map( (errorMsg, i) => {
      return <li key={ i }>{ errorMsg }</li>;
    });

    return <ul>{ messages }</ul>;
  },

  greeting () {
    if (SessionStore.isUserLoggedIn()) {
      return (
        <nav className="group">
          <ul>
              <li><input type="submit" onClick={this._handleLogOut}
                  value="Log Out" /></li>
          </ul>
        </nav>
      );
    } else {
      return (
        <nav className="group">
          <ul>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Sign Up!</Link></li>
          </ul>
        </nav>
      );
    }
  },

  render () {
    return (
      <div>
        {this.greeting()}
        {this.errors()}
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;
