const React = require('react');
const CommentActions = require('../../actions/comment_actions');
const CommentStore = require('../../stores/comment');
const CommentIndexItem = require('./comment_index_item');
const CommentForm = require('./comment_form');
const SessionStore = require('../../stores/session');

const CommentIndex = React.createClass({
  getInitialState () {
    return { comments: []  };
  },

  _onChange () {
    this.setState({ comments: CommentStore.all() });
  },

  componentDidMount () {
    this.commentListener = CommentStore.addListener(this._onChange);
    CommentActions.fetchPhotoComments(this.props.photoId);
  },

  componentWillUnmount () {
    this.commentListener.remove();
  },

  render () {
    let comments = this.state.comments.forEach((comment) => {
      return <CommentIndexItem comment={comment} />;
    });

    let commentForm;
    let currentUser = SessionStore.currentUser();

    if (currentUser) {
      commentForm = <CommentForm user={currentUser} />;
    }

    return (
      <div className="comments">
        { commentForm }

        <ul className="comments-list">
          { comments }
        </ul>
      </div>
    );
  }
});

module.exports = CommentIndex;
