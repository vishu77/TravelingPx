const FollowUtil = {
  createFollow (data, success) {
    $.ajax({
      url: '/api/favorites',
      type: 'POST',
      data: { follow: data },
      success
    });
  },

  deleteFollow (data, success) {
    $.ajax({
      url: '/api/favorites',
      type: 'DELETE',
      data: { follow: data },
      success 
    });
  }
};

module.exports = FollowUtil;
