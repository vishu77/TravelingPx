const React = require('react');

const PhotoIndexItem = React.createClass({
  render () {
    let photo = this.props.photo;
    
    return (
      <div>
        <img className="condensed" src={photo.image_url} />
        <ul>
          <li>{photo.title}</li>
          <li>{photo.description}</li>
        </ul>
      </div>
    );
  }
});

module.exports = PhotoIndexItem;
