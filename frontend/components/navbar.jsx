const React = require('react');
const Link = require('react-router').Link;
const SessionStore = require('../stores/session');
const SessionActions = require('../actions/session_actions');

const NavBar = React.createClass({
  _handleLogOut (e) {
    e.preventDefault();
    SessionActions.logout();
  },

  navLeft () {
    if (SessionStore.isUserLoggedIn()) {
      return (
        <ul>
          <li><button>some logo</button></li>
          <li><button>home button</button></li>
        </ul>
      );
    } else {
      return (
        <ul>
          <li><button>some logo</button></li>
        </ul>
      );
    }
  },

  navRight () {
    if (SessionStore.isUserLoggedIn()) {
      return (
        <ul>
          <li><button onClick={this._handleLogOut}>Log Out</button></li>
          <li><button>Upload</button></li>
        </ul>
      );
    } else if (this.props.pathname === '/login') {
      return (
        <ul>
          <li><Link to="/signup">Sign Up</Link></li>
        </ul>
      );
    } else if (this.props.pathname === '/signup'){
      return (
        <ul>
          <li><Link to="/login">Login</Link></li>
        </ul>
      );
    } else {
      return (
        <ul>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
        </ul>
      );
    }
  },

  render () {
    return (
      <nav className="navbar group">
        <div className="leftButtons">
          {this.navLeft()}
        </div>

        <div className="rightButtons">
          {this.navRight()}
        </div>
      </nav>
    );
  }
});

module.exports = NavBar;
