const AppDispatcher = require('../dispatcher/dispatcher');
const UserConstants = require('../constants/user_constants');
const UserUtil = require('../utils/user_api_util');

const UserActions = {
  fetchProfile (username) {
    UserUtil.fetchProfile(username, this.receiveProfile);
  },

  updateProfile (formData, userId) {
    UserUtil.updateProfile(formData, userId, this.receiveProfile);
  },

  receiveProfile(profile) {
    AppDispatcher.dispatch({
      actionType: UserConstants.PROFILE_RECEIVED,
      profile: profile
    });
  },
};

module.exports = UserActions;
