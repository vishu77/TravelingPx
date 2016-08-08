const Store = require('flux/utils').Store;
const AppDispatcher = require('../dispatcher/dispatcher');
const SessionConstants = require('../constants/session_constants');
const FollowConstants = require('../constants/follow_constants');

let _currentUser = {};
let _profile = {};

const SessionStore = new Store(AppDispatcher);

const _login = (currentUser) => {
  _currentUser = currentUser;
  SessionStore.__emitChange();
};

const _logout = () => {
  _currentUser = {};
  SessionStore.__emitChange();
};

const _addFollow = (followeeId) => {
  _currentUser.followees.push(parseInt(followeeId));
  SessionStore.__emitChange();
};

const _setProfile = (profile) => {
  _profile = profile;
  SessionStore.__emitChange();
};

const _removeFollow = (followeeId) => {
  let userIdx = _currentUser.followees.indexOf(parseInt(followeeId));
  _currentUser.followees.splice(userIdx, 1);
  SessionStore.__emitChange();
};

SessionStore.currentUser = () => {
  return Object.assign({}, _currentUser);
};

SessionStore.isUserLoggedIn = () => {
  return !!_currentUser.id;
};

SessionStore.profile = () => {
  return _profile;
};

SessionStore.__onDispatch = (payload) => {
  switch (payload.actionType) {
    case SessionConstants.LOGIN:
      _login(payload.currentUser);
      break;

    case SessionConstants.LOGOUT:
      _logout();
      break;

    case SessionConstants.PROFILE_RECEIVED:
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

module.exports = SessionStore;
