const Store = require('flux/utils').Store;
const AppDispatcher = require('../dispatcher/dispatcher');
const CommentConstants = require('../constants/comment_constants');

let _photoComments = {};

const _resetComments = (comments) => {
  _photoComments = {};

  comments.forEach((comment) => {
    _photoComments[comment.id] = comment;
  });

  CommentStore.__emitChange();
};

const _addComment = (comment) => {
  _photoComments.push(comment);
  CommentStore.__emitChange();
};

const CommentStore = new Store(AppDispatcher);

CommentStore.all = () => {
  let comments = [];
  for (let commentId in _photoComments) {
    comments.push(_photoComments[commentId]);
  }

  return comments;
};

CommentStore.__onDispatch = (payload) => {
  switch (payload.actionType) {
    case CommentConstants.COMMENTS_RECEIVED:
    _resetComments(payload.comments);
    break;

    case CommentConstants.COMMENTS_RECEIVED:
    _addComment(payload.comment);
    break;
  }
};

module.exports = CommentStore;
