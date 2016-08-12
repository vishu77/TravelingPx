const React = require('react');
import { Link, browserHistory } from 'react-router';
const SessionStore = require('../../stores/session');
const SessionActions = require('../../actions/session_actions');
const UploadModal = require('./upload_modal');
const UserDropDown = require('./user_dropdown');

const NavBar = React.createClass({
  getInitialState () {
    return { userDropDown: false };
  },

  _handleMain (e) {
    e.preventDefault();
    browserHistory.push("/");
  },

  _dropDownClick (e) {
    e.preventDefault();
    this.setState({ userDropDown: true });
 },

  _dropDownOff() {
    this.setState({ userDropDown: false });
  },

  componentWillReceiveProps (newProps) {
    this._dropDownOff();
  },

  navLeft () {
    if (SessionStore.isUserLoggedIn()) {
      return (
        <ul>
          <li><Link to="/"><img className="logo" src={window.logoURL} /></Link></li>
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
      let currentUser = SessionStore.currentUser();
      let name = currentUser.username;

      if ( currentUser.first_name ) {
        name = `${currentUser.first_name} ${currentUser.last_name}`;
      }

      let dropDown = this.state.userDropDown ? <UserDropDown /> : "";

      return (
        <ul className="username">
          <li className="menu-list">
            <button
              onClick={ this._dropDownClick }
              onMouseLeave= { this._dropDownOff }>

              <img className="avatar" src={ currentUser.avatar_url } />
              <h5>{ name }</h5>
              { dropDown }
            </button>
          </li>
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
          { this.navLeft() }
        </div>

        <div className="rightButtons">
          { this.navRight() }
        </div>
      </nav>
    );
  }
});

module.exports = NavBar;
