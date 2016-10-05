const React = require('react');
const CommentActions = require('../../actions/comment_actions');

const CommentForm = React.createClass({
  getInitialState () {
    return { comment: "" };
  },

  _handleSubmit (e) {
    e.preventDefault();

    let comment = {
      photo_id: this.props.photoId,
      comment: this.state.comment
    }

    CommentActions.createComment(comment);
    this.setState({ comment: "" });
  },

  updateBody (e) {
    this.setState({ comment: e.target.value });
  },

  render () {
    let currentUser = this.props.currentUser;
    let userAvatar = currentUser.avatar_url;
    let name = currentUser.username;

    if ( currentUser.first_name ) {
      name = `${currentUser.first_name} ${currentUser.last_name}`;
    }

    return (
      <div>
        <ul className="comment-user-info" >
          <li><img src={ userAvatar } className="thumbnail" /></li>
          <li>{ name }</li>
        </ul>

        <form onSubmit={ this._handleSubmit } className="comments-form">
          <textarea className="comment-input"
              value={ this.state.comment }
              onChange={ this.updateBody } />
            <button className="upload-button">Add Comment</button>
        </form>
      </div>
    )
  }
});

module.exports = CommentForm;
