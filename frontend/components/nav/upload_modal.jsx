const React = require('react');
const Modal = require('react-modal');
const UploadStyle = require('./upload_style');

const UploadModal = React.createClass({
  getInitialState () {
    return { modalOpen: false};
  },

  _handleClick () {
    this.setState({modalOpen: true});
  },

  onModalClose () {
    this.setState({modalOpen: false});
    UploadStyle.content.opacity = 0;
  },

  onModalOpen () {
    UploadStyle.content.opacity = 100;
  },

  render () {
    return (
      <li>
        <button onClick={this._handleClick}>Upload</button>

        <Modal
          isOpen={this.state.modalOpen}
          onAfterOpen={this.onModalOpen}
          onRequestClose={this.onModalClose}
          style={UploadStyle}>

          <button onClick={this.onModalClose}>Close</button>
          ...content

        </Modal>
      </li>
    );
  }
});

module.exports = UploadModal;
