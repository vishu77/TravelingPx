const FollowUtil = {
  createFollow (data, success) {
    $.ajax({
      url: '/api/follows',
      type: 'POST',
      data: { follow: data },
      success
    });
  },

  deleteFollow (data, success) {
    $.ajax({
      url: `/api/follows/${data.poster_id}`,
      type: 'DELETE',
      data: { follow: data },
      success
    });
  }
};

module.exports = FollowUtil;
