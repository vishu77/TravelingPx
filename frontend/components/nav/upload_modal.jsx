const React = require('react');
const Modal = require('react-modal');
const ModalStyle = require('./modal_style');
const ImageDrop = require('./image_drop');

const UploadModal = React.createClass({
  getInitialState () {
    return { modalOpen: false};
  },

  _handleClick () {
    this.setState({ modalOpen: true });
  },

  onModalClose () {
    this.setState({modalOpen: false});
    ModalStyle.content.opacity = 0;
  },

  onModalOpen () {
    ModalStyle.content.opacity = 100;
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

          <button onClick={this.onModalClose}>Close</button>

          <ImageDrop />
        </Modal>
      </li>
    );
  }
});

module.exports = UploadModal;
