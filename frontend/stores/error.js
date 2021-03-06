const Store = require('flux/utils').Store;
const AppDispatcher = require('../dispatcher/dispatcher');
const ErrorConstants = require('../constants/error_constants');

let _errors = [];
let _form = "";

const ErrorStore = new Store(AppDispatcher);

const _clearErrors = () => {
  _form = "";
  _errors = [];
  ErrorStore.__emitChange();
};

const _setErrors = (payload) => {
  _form = payload.form;
  _errors = [];

  payload.errors.errors.forEach ((error) => {
    _errors.push(error);
  });

  ErrorStore.__emitChange();
};

ErrorStore.errors = (form) => {
  if (form !== _form) {
    return [];
  }

  return _errors.slice();
};

ErrorStore.form = () => {
  return _form;
};

ErrorStore.__onDispatch = (payload) => {
  switch (payload.actionType) {
    case ErrorConstants.SET_ERRORS:
      _setErrors(payload);
      break;

    case ErrorConstants.CLEAR_ERRORS:
      _clearErrors();
      break;
  }
};

module.exports = ErrorStore;
