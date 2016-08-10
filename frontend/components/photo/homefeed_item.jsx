const React = require('react');
import { Link } from 'react-router';

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

        <div className="follow-item">
          <Link to={'/' + photo.username }>
            <img className="thumbnail" src={photo.avatar_url} />
          </Link>

          <Link to={'/' + photo.username}>
            <h3>{ name }</h3>
          </Link>

          <h4>{ photo.created_at }</h4>
        </div>

        <div>
          <h1>{ photo.title }</h1>
        </div>
      </li>
    );
  }
});

module.exports = HomeFeedItem;
