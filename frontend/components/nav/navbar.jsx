const React = require('react');
import { Link, browserHistory } from 'react-router';
const SessionStore = require('../../stores/session');
const SessionActions = require('../../actions/session_actions');
const UploadModal = require('./upload_modal');
const NavBar = React.createClass({
  _handleLogOut (e) {
    e.preventDefault();
    SessionActions.logout();
  },

  _handleMain (e) {
    e.preventDefault();
    browserHistory.push("/");
  },

  navLeft () {
    if (SessionStore.isUserLoggedIn()) {
      return (
        <ul>
          <li><Link to="/"><img className="logo" src={window.logoURL} /></Link></li>
          <li><button>home button</button></li>
        </ul>
      );
    } else {
      return (
        <ul>
          <li><Link to="/"><img className="logo" src={window.logoURL} /></Link></li>
        </ul>
      );
    }
  },

  navRight () {
    if (SessionStore.isUserLoggedIn()) {
      return (
        <ul>
          <li><button onClick={this._handleLogOut}>Log Out</button></li>
          <UploadModal />
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
    let navClass = "navbar navbar-home group";
    if (SessionStore.isUserLoggedIn() || this.props.pathname !== '/') {
      navClass="navbar navbar-other group";
    }

    return (
      <nav className={navClass}>
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
