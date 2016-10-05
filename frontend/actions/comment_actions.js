const CommentUtil = require('../utils/comment_api_util');
const AppDispatcher = require('../dispatcher/dispatcher');
const CommentConstants = require('../constants/comment_constants');

const CommentActions = {
  fetchPhotoComments(photoId) {
    CommentUtil.fetchPhotoComments(photoId, this.receiveComments);
  },

  createComment (comment) {
    CommentUtil.createComment(comment, this.receiveComment);
  },

  receiveComments (comments) {
    AppDispatcher.dispatch({
      actionType: CommentConstants.COMMENTS_RECEIVED,
      comments: comments
    });
  },

  receiveComment (comment) {
    AppDispatcher.dispatch({
      actionType: CommentConstants.COMMENT_RECEIVED,
      comment: comment
    });
  }
};

module.exports = CommentActions;
