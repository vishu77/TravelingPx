const SessionUtil = {
  signup (user, success, errorCb) {
    $.ajax({
      url: 'api/users',
      method: 'POST',
      dataType: 'json',
      data: { user },
      success,
      error(xhr) {
        const errors = xhr.responseJSON;
        errorCb('signup', errors);
      }
    });
  },

  login (user, success, errorCb) {
    $.ajax({
      url: 'api/session',
      method: 'POST',
      data: { user },
      success,
      error(xhr) {
        const errors = xhr.responseJSON;
        errorCb('login', errors);
      }
    });
  },

  logout (success) {
    $.ajax({
      url: 'api/session',
      method: 'DELETE',
      success,
      error: function () {
        console.log("Logout error in SessionUtil#logout");
      }
    });
  }
};

module.exports = SessionUtil;
