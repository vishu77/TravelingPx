const React = require('react');
const PhotoStore = require('../../stores/photo');
const PhotoActions = require('../../actions/photo_actions');

const PhotoShow = React.createClass({
  getInitialState () {
    const photo = PhotoStore.find(this.props.params.photoId);
    return { photo: photo };
  },

  componentDidMount () {
    this.photoListener = PhotoStore.addListener(this.handleChange);
    PhotoActions.fetchSinglePhoto(parseInt(this.props.params.photoId));
  },

  componentWillUnmount () {
    this.photoListener.remove();
  },

  handleChange() {
    const photo = PhotoStore.find(this.props.params.photoId);
    this.setState({ photo: photo });
  },

  render () {
    let photoDetails = this.props.photo;
    debugger

    return (
      <div className="photo-show">
        <div className="image-show-box">
          <img className="upload-photo" src="" />
        </div>

        <div className="photo-details-box">
          <div>
          </div>

          <div>
            {photoDetails.title}
          </div>

          <div>
            <p>{photoDetails.description}</p>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = PhotoShow;
