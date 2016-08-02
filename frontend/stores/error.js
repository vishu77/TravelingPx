const Store = require('flux/utils').Store;
const AppDispatcher = require('../dispatcher/dispatcher');
const ErrorConstants = require('../constants/error_constants');

const ErrorStore = new Store(AppDispatcher);

let _errors = [];
let _form = "";

const _setErrors = (payload) => {
  _form = payload.form;
  _errors = payload.errors;
  ErrorStore.__emitChange();
};

const _clearErrors = () => {
  _form = "";
  _errors = [];
  ErrorStore.__emitChange();
};

ErrorStore.errors = (form) => {
  if (form === _form) {
    return _errors;
  }
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
