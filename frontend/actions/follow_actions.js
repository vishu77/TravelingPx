const FollowUtil = require('../util/follow_api_util');
const FollowConstants = require ('../constants/follow_constant');
const AppDispatcher = require('../dispatcher/dispatcher');

const FollowActions = {
  createFollow (data) {
    FollowUtil.createFollow(data, this.receiveFollow);
  },

  deleteFollow (data) {
    FollowUtil.deleteFollow(data, this.removeFollow);
  },

  receiveFollow (follow) {
    AppDispatcher.dispatch({
      actionType: FollowConstants.FOLLOW_RECEIVED,
      follow: follow
    });
  },

  removeFollow (follow) {
    AppDispatcher.dispatch({
      actionType: FollowConstants.FOLLOW_REMOVED,
      follow: follow
    });
  }
};

module.exports = FollowActions;
