const React = require('react');
const Masonry = require('react-masonry-component');
const PhotoActions = require('../../actions/photo_actions');
const PhotoStore = require('../../stores/photo');
const PhotoIndexItem = require('./index_item');

const masonryOptions = {
  isFitWidth: true,
	gutter: 10
};

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

  gallery () {
    return this.state.photos.map((photo) => {
      return <PhotoIndexItem photo={photo} key={photo.id} />;
    });
  },

  render () {
    return (
      <Masonry className="gallery"
        elementType='ul'
        options={masonryOptions}
        disableImagesLoaded={false}>

        { this.gallery() }
      </Masonry>
    );
  }
});

module.exports = PhotoIndex;
