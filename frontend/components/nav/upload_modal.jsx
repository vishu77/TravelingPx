const React = require('react');
const Modal = require('react-modal');
const Dropzone = require('react-dropzone');
const ModalStyle = require('./modal_style');
const PhotoForm = require('../photo/form');

const UploadModal = React.createClass({
  getInitialState () {
    return { modalOpen: false, image_url: "" };
  },

  _handleClick () {
    this.setState({ modalOpen: true });
  },

  _onOpenClick () {
    this.refs.dropzone.open();
  },

  onDrop (image_url) {
    this.setState({ image_url: image_url });
  },

  onModalClose () {
    this.setState({ modalOpen: false, image_url: "" });
    ModalStyle.content.opacity = 0;
  },

  onModalOpen () {
    ModalStyle.content.opacity = 100;
  },

  photoDropped () {
    if (this.state.image_url) {
      return (
        <PhotoForm image_url={this.state.image_url} close={this.onModalClose}/>
      );
    } else {
      return (
        <Dropzone ref="dropzone"
            className="dropzone"
            activeClassName="dragging"
            multiple={false} disableClick={true}
            accept='image/*' onDrop={this.onDrop}>

          <button onClick={this._onOpenClick}>
            Browse Photos
          </button>

          <div>Or drag & drop photos anywhere in this box</div>
        </Dropzone>
      );
    }
  },

  render () {
    return (
      <li>
        <button onClick={this._handleClick}>Upload</button>

        <Modal
          isOpen={this.state.modalOpen}
          onAfterOpen={this.onModalOpen}
          onRequestClose={this.onModalClose}
          style={ModalStyle}>

          { this.photoDropped() }
        </Modal>
      </li>
    );
  }
});

module.exports = UploadModal;
