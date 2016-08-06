const React = require('react');
import { browserHistory } from 'react-router';
const PhotoShow = require('./show');

const PhotoIndexItem = React.createClass({
  handleClick () {
    browserHistory.push(`/photos/${this.props.photo.id}`);
  },

  render () {
    let photo = this.props.photo;

    return (
      <li>
        <img className="condensed"
          onClick={this.handleClick}
          src={photo.image_url} />
      </li>
    );
  }
});

module.exports = PhotoIndexItem;
