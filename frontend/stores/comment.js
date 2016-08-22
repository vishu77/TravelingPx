const Store = require('flux/utils').Store;
const AppDispatcher = require('../dispatcher/dispatcher');
const CommentConstants = require('../constants/comment_consants');

let _photoComments = [];

const _resetComments = (comments) => {
  _photoComments = [];
  _photoComments = comments;

  CommentStore.__emitChange();
};

const _addComment = (comment) => {
  _photoComments.push(comment);
  CommentStore.__emitChange();
};

const CommentStore = new Store(AppDispatcher);

CommentStore.all = () => {
  return _photoComments.slice();
};

CommentStore.__onDispatch = () => {
  switch (payload.actionType) {
    case CommentConstants.COMMENTS_RECEIVED:
    _resetComments(comments);
    break;

    case CommentConstants.COMMENTS_RECEIVED:
    _addComment(comment);
    break;
  }
};

module.exports = CommentStore;
