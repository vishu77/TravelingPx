const Store = require('flux/utils').Store;
const AppDispatcher = require('../dispatcher/dispatcher');
const UserConstants = require('../constants/session_constants');
const FollowConstants = require('../constants/follow_constants');

let _profile = {};
const UserStore = new Store(AppDispatcher);

const _addFollow = (followeeId) => {
  _currentUser.followees.push(parseInt(followeeId));
  UserStore.__emitChange();
};

const _setProfile = (profile) => {
  _profile = profile;
  UserStore.__emitChange();
};

const _removeFollow = (followeeId) => {
  let userIdx = _currentUser.followees.indexOf(parseInt(followeeId));
  _currentUser.followees.splice(userIdx, 1);
  UserStore.__emitChange();
};

UserStore.profile = () => {
  return _profile;
};


UserStore.__onDispatch = (payload) => {
  switch (payload.actionType) {
    case UserConstants.PROFILE_RECEIVED:
      _setProfile(payload.profile);
      break;

  case FollowConstants.FOLLOW_RECEIVED:
    _addFollow(payload.follow.followeeId);
    break;

  case FollowConstants.FOLLOW_REMOVED:
    _removeFollow(payload.follow.followeeId);
    break;
  }
};

module.exports = UserStore;
