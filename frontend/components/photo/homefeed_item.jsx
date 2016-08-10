const React = require('react');
import { Link } from 'react-router';
const TimeAgo = require('react-timeago').default;

const HomeFeedItem = React.createClass({
  render () {
    let photo = this.props.photo;
    let name = photo.username;

    if (photo.poster) {
      name = photo.poster;
    }

    return (
      <li className="homefeed-item">
        <Link to={'/photos/' + photo.id}>
          <img className="homefeed-img" src={photo.image_url} />
        </Link>

        <ul className="homefeed-user group">
          <li>
            <Link to={'/' + photo.username }>
              <img className="thumbnail" src={photo.avatar_url} />
            </Link>
          </li>

          <li>
            <Link to={'/' + photo.username}>
              { name }
            </Link>
          </li>

          <li>
            <TimeAgo date={ photo.created_at } />
          </li>
        </ul>

        <ul>
          <li>{ photo.title }</li>
          <li>{ photo.description }</li>
        </ul>
      </li>
    );
  }
});

module.exports = HomeFeedItem;
