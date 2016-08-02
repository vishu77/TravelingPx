const React = require('react');
const Link = require('react-router').Link;
const SessionStore = require('../stores/session');
const SessionActions = require('../actions/session_actions');

const App = React.createClass({
  _handleLogOut (e) {
    e.preventDefault();
    SessionActions.logout();
  },

  greeting () {
    if (SessionStore.isUserLoggedIn()) {
      return (
        <nav>
          <ul>
            <input type="submit" value="Logout" onClick={this._handleLogOut} />
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
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;
