const React = require('react');
import { Link } from 'react-router';

const PhotoIndexItem = React.createClass({
  render () {
    let photo = this.props.photo;

    return (
      <li>
        <Link to={'/photos/' + photo.id}>
          <img className="gallery-image" src={photo.image_url} />
        </Link>
      </li>
    );
  }
});

module.exports = PhotoIndexItem;
