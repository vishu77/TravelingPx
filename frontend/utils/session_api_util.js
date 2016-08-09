const SessionUtil = {
  fetchProfile(userId, success) {
    $.ajax({
      url: `/api/users/${userId}`,
      method: "GET",
      success (user) {
        success(user);
      }
    });
  },

  updateProfile(formData, userId, success) {
    $.ajax({
      url: `/api/users/${userId}`,
      method: 'PATCH',
      processData: false,
      contentType: false,
      data: formData,
      success (data) {
        success(data);
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
  },

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
  }
};

module.exports = SessionUtil;
