const SessionActions = require('./actions/session_actions');

const SetupApp = () => {
  let user = window.pxApp.user;
  if (typeof user !== "undefined") {
    SessionActions.receiveCurrentUser(user);
  }
};

module.exports = SetupApp;
