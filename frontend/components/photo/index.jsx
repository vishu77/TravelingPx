const React = require('react');
const Masonry = require('react-masonry-component');
const PhotoActions = require('../../actions/photo_actions');
const PhotoStore = require('../../stores/photo');
const PhotoIndexItem = require('./index_item');

const masonryOptions = {
  isFitWidth: true,
	gutter: 5
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
      <div className="gallery">
        <Masonry
          className="photo-index"
          elementType='ul'
          options={masonryOptions}
          disableImagesLoaded={false}
          updateOnEachImageLoad={true}>

          { this.gallery() }
        </Masonry>
      </div>
    );
  }
});

module.exports = PhotoIndex;
