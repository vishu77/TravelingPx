const SessionUtil = {
  signup (user, success, clear, errorCb) {
    $.ajax({
      url: '/api/users',
      method: 'POST',
      dataType: 'json',
      data: { user },
      success(resp) {
        success(resp);
        clear();
      },
      error(xhr) {
        const errors = xhr.responseJSON;
        errorCb('signup', errors);
      }
    });
  },

  login (user, success, clear, errorCb) {
    $.ajax({
      url: '/api/session',
      method: 'POST',
      data: { user },
      success (resp){
        success(resp);
        clear();
      },
      error(xhr) {
        const errors = xhr.responseJSON;
        errorCb('login', errors);
      }
    });
  },

  logout (success) {
    $.ajax({
      url: '/api/session',
      method: 'DELETE',
      success,
      error: function () {
        console.log("Logout error in SessionUtil#logout");
      }
    });
  }
};

module.exports = SessionUtil;
