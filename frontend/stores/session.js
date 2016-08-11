const Store = require('flux/utils').Store;
const AppDispatcher = require('../dispatcher/dispatcher');
const SessionConstants = require('../constants/session_constants');
const FollowConstants = require('../constants/follow_constants');
const PhotoConstants = require('../constants/photo_constants');

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
const _addPhoto = (photo) => {
  if ( _currentUser.id ) {
    _currentUser.photos.push(photo);
  }
  SessionStore.__emitChange();
};

const _addFollow = (following) => {
  _currentUser.followees.push(following);
  SessionStore.__emitChange();
};

const _removeFollow = (followeeId) => {
  let index;
  _currentUser.followees.find((follow, idx) => {
    index = idx;
    return follow.followeeId === parseInt(followeeId);
  });
  _currentUser.followees.splice(index, 1);
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
      _removeFollow(payload.follow.followeeId);
      break;
    case PhotoConstants.PHOTO_RECEIVED:
      _addPhoto(payload.photo);
      break;
  }
};

module.exports = SessionStore;
