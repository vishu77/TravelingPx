const Store = require('flux/utils').Store;
const AppDispatcher = require('../dispatcher/dispatcher');
const SessionConstants = require('../constants/session_constants');
const FollowConstants = require('../constants/follow_constants');

let _currentUser = {};

const SessionStore = new Store(AppDispatcher);

const _login = (currentUser) => {
  _currentUser = currentUser;
  SessionStore.__emitChange();
};

const _logout = () => {
  _currentUser = {};
  SessionStore.__emitChange();
};

const _addFollow = (userID) => {
  _currentUser.followees.push(parseInt(userID));
  SessionStore.__emitChange();
};

const _removeFollow = (userID) => {
  let userIdx = _currentUser.followees.indexOf(parseInt(userID));
  _currentUser.followees.splice(userIdx, 1);
  SessionStore.__emitChange();
};

SessionStore.currentUser = () => {
  return Object.assign({}, _currentUser);
};

SessionStore.isUserLoggedIn = () => {
  return !!_currentUser.id;
};

SessionStore.__onDispatch = (payload) => {
  switch (payload.actionType) {
    case SessionConstants.LOGIN:
      _login(payload.currentUser);
      break;

    case SessionConstants.LOGOUT:
      _logout();
      break;

    case FollowConstants.FOLLOW_RECEIVED:
      _addFollow(payload.follow);
      break;

    case FollowConstants.FOLLOW_REMOVED:
      _removeFollow(payload.follow);
      break;
  }
};

module.exports = SessionStore;
