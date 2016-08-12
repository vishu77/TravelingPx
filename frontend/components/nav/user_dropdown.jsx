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
      <div>
        <Link to={'/' + currentUser.username }>
          <h3 className="menu-item first-item">
            My Profile
          </h3>
        </Link>

        <Link to='/' onClick={ this._handleLogOut }>
          <h3 className="menu-item second-item">
            Log Out
          </h3>
        </Link>
      </div>
    );
  }

});

module.exports = UserDropDown;
