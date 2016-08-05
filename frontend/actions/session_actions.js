import { browserHistory } from 'react-router';
const AppDispatcher = require('../dispatcher/dispatcher');
const ErrorActions = require('./error_actions');
const SessionConstants = require('../constants/session_constants');
const SessionUtil = require('../utils/session_api_util');

const SessionActions = {
  login (user) {
    SessionUtil.login(user,
      SessionActions.receiveCurrentUser,
      ErrorActions.setErrors);
  },

  logout () {
    SessionUtil.logout(SessionActions.removeCurrentUser);
  },

  signup (user) {
    SessionUtil.signup(user,
      SessionActions.receiveCurrentUser,
      ErrorActions.setErrors);
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
    browserHistory.push("/");
  }
};

module.exports = SessionActions;
