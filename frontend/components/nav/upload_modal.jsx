const React = require('react');
const Modal = require('react-modal');
const Dropzone = require('react-dropzone');
const ModalStyle = require('./modal_style');
const PhotoForm = require('../photo/form');

const UploadModal = React.createClass({
  getInitialState () {
    return { modalOpen: false, imageURL: "", imageFile: null };
  },

  _handleClick () {
    this.setState({ modalOpen: true });
  },

  _onOpenClick () {
    this.refs.dropzone.open();
  },

  onDrop (image) {
    let reader = new FileReader();
    let file = image[0];

    reader.onloadend = () => {
      this.setState({ imageURL: reader.result, imageFile: file });
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ imageURL: "", imageFile: null });
    }
  },

  onModalClose () {
    this.setState({ modalOpen: false, imageURL: "", imageFile: null });
    ModalStyle.content.opacity = 0;
  },

  onModalOpen () {
    ModalStyle.content.opacity = 100;
  },

  photoDropped () {
    if (this.state.imageFile) {
      return (
        <PhotoForm imageURL={this.state.imageURL}
          imageFile={this.state.imageFile}
          close={this.onModalClose} />
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
      <li className="nav-item" onClick={this._handleClick}>
        Upload

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
