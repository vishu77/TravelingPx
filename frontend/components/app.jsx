const React = require('react');
const Link = require('react-router').Link;
const SessionStore = require('../stores/session');
const SessionActions = require('../actions/session_actions');

const App = React.createClass({
  render () {
    return (
      <div>
        <nav className="group">
          <ul>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Sign Up!</Link></li>
          </ul>
        </nav>

        {this.props.children}
      </div>
    );
  }
});

module.exports = App;
