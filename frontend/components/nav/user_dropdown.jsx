const React = require('react');
import { Link } from 'react-router';
const SessionStore = require('../../stores/session');
const SessionActions = require('../../actions/session_actions');

const UserDropDown = React.createClass({
  _handleLogOut (e) {
    e.preventDefault();
    SessionActions.logout();
  },

  render () {
    let currentUser = SessionStore.currentUser();

    return (
      <ul>
        <Link to={'/' + currentUser.username }>
          <li className="menu-item first-item">
            My Profile
          </li>
        </Link>

        <Link to='/' onClick={ this._handleLogOut }>
          <li className="menu-item second-item">
            Log Out
          </li>
        </Link>
      </ul>
    );
  }

});

module.exports = UserDropDown;
