const React = require('react');
import { Link } from 'react-router';

const CommentIndexItem = React.createClass({
  render () {
    let commentInfo = this.props.comment;
    let authorName = commentInfo.username;
    let avatar = commentInfo.avatar_url;
    let comment = commentInfo.comment;

    if (commentInfo.first_name) {
      authorName = `${commentInfo.first_name} ${commentInfo.last_name}`;
    }

    return (
      <li>
        <div>
          <Link to={'/' + commentInfo.username}>
            <img className="thumbnail" src={ avatar } />
          </Link>
          <Link to={'/' + commentInfo.username}>
            <h3>{ authorName }</h3>
          </Link>

          <p>{ comment }</p>
        </div>
      </li>
    )
  }

});

module.exports = CommentIndexItem;
