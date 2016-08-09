const UserUtil = {
  fetchProfile(username, success) {
    $.ajax({
      url: `/api/users/${username}`,
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
  }
};

module.exports = UserUtil;
