const CommentUtil = {
  fetchPhotoComments (photoId, success) {
    $.ajax({
      url: '/api/comments',
      method: "GET",
      data: { photoId: photoId },
      success (comments) {
        success(comments);
      }
    });
  },

  createComment (comment, success) {
    $.ajax({
      url: `/api/comments`,
      method: 'POST',
      data: { comment },
      success (resp) {
        success(resp);
      }
    });
  }
};

module.exports = CommentUtil;
