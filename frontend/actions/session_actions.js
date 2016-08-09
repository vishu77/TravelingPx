import { browserHistory } from 'react-router';
const AppDispatcher = require('../dispatcher/dispatcher');
const ErrorActions = require('./error_actions');
const SessionConstants = require('../constants/session_constants');
const SessionUtil = require('../utils/session_api_util');

const SessionActions = {
  fetchProfile (userId) {
    SessionUtil.fetchProfile(userId, this.receiveProfile);
  },

  login (user) {
    SessionUtil.login(user,
      SessionActions.receiveCurrentUser,
      ErrorActions.clearErrors,
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

  updateProfile (formData, userId) {
    SessionUtil.updateProfile(formData, userId, this.receiveProfile);
  },

  receiveCurrentUser(currentUser) {
    AppDispatcher.dispatch({
      actionType: SessionConstants.LOGIN,
      currentUser: currentUser
    });
  },

  receiveProfile(profile) {
    AppDispatcher.dispatch({
      actionType: SessionConstants.PROFILE_RECEIVED,
      profile: profile
    });
  },

  removeCurrentUser() {
    AppDispatcher.dispatch({
      actionType: SessionConstants.LOGOUT
    });
    browserHistory.push('/');
  }
};

module.exports = SessionActions;
