const Store = require('flux/utils').Store;
const AppDispatcher = require('../dispatcher/dispatcher');
const SessionConstants = require('../constants/session_constants');

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
  }
};

module.exports = SessionStore;
