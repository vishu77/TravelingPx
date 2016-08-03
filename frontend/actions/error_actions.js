const AppDispatcher = require('../dispatcher/dispatcher');
const ErrorConstants = require('../constants/error_constants');

const ErrorActions = {
  clearErrors () {
    AppDispatcher.dispatch({
      actionType: ErrorConstants.CLEAR_ERRORS,
    });
  },

  setErrors (form, errors) {
    AppDispatcher.dispatch({
      actionType: ErrorConstants.SET_ERRORS,
      form: form,
      errors: errors
    });
  },
};

module.exports = ErrorActions;
