const React = require('react');
const PhotoActions = require('../../actions/photo_actions');
const PhotoStore = require('../../stores/photo');
const PhotoIndexItem = require('./index_item');

const PhotoIndex = React.createClass({
  getInitialState () {
    return { photos: [] };
  },

  _onChange () {
    this.setState({ photos: PhotoStore.all() });
  },

  componentDidMount () {
    this.photoListener = PhotoStore.addListener(this._onChange);
    PhotoActions.fetchAllPhotos();
  },

  componentWillUnmount () {
    this.photoListener.remove();
  },

  render () {
    let photos = [];
    this.state.photos.forEach((photo) => {
      photos.push(<PhotoIndexItem photo={photo} key={photo.id} />);
    });

    return (
      <div className="photo-main">
        {photos}
      </div>
    );
  }
});

module.exports = PhotoIndex;
