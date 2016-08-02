const SessionApilUtil = {
  signup (user, success, error) {
    $.ajax({
      url: '/api/users',
      method: 'POST',
      dataType: 'json',
      data: { user },
      success,
      error(xhr) {
        const errors = xhr.responseJSON;
        error("login", errors);
      }
    });
  },

  login (user, success, error) {
    $.ajax({
      url: '/api/session',
      method: 'POST',
      data: { user },
      success,
      error(xhr) {
        const errors = xhr.responseJSON;
        error("login", errors);
      }
    });
  },

  logout (success) {
    $.ajax({
      url: '/api/session',
      method: 'DELETE',
      data: { user },
      success,
      error: function () {
        console.log("Logout error in UserApiUtil#logout");
      }
    });
  }
};

module.exports = SessionApilUtil;
