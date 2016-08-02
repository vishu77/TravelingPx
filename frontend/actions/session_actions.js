const React = require('react');
const AppDispatcher = require('../dispatcher/dispatcher');
const SessionConstants = require('../constants/session_constants');
const SessionApiUtil = require('../utils/session_api_util');
const ErrorActions = require('../actions/error_actions');

const SessionActions = {
  contextTypes: {
		router: React.PropTypes.object.isRequired
	},

  signup (user) {
    SessionApiUtil.signup(user,
      SessionActions.receiveCurrentUser,
      ErrorActions.setErrors);
  },

  login (user) {
    SessionApiUtil.login(user,
      SessionActions.receiveCurrentUser,
      ErrorActions.setErrors);
  },

  logout () {
    SessionApiUtil.logout(SessionActions.removeCurrentUser);
  },

  receiveCurrentUser(currentUser) {
    AppDispatcher.dispatch({
      actionType: SessionConstants.LOGIN,
      currentUser: currentUser
    });
  },

  removeCurrentUser() {
    AppDispatcher.dispatch({
      actionType: SessionConstants.LOGOUT
    });
    this.context.router.push("/");
  }
};

module.exports = SessionActions;
