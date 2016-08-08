const React = require('react');
const Modal = require('react-modal');
const EditStyle = require('./edit_style');
const SessionActions = require('../../actions/session_actions');

const ProfileEdit = React.createClass({
  getInitialState () {
    let profile = this.props.profile;
    return {
      first_name: profile.first_name, last_name: profile.last_name,
      about: profile.about,
      coverURL: profile.cover_url, avatarURL: profile.avatar_url,
      modalOpen: false
    };
  },

  _handleClick () {
    this.setState({ modalOpen: true });
  },

  onModalClose () {
    this.setState({ modalOpen: false });
    EditStyle.content.opacity = 0;
  },

  onModalOpen () {
    EditStyle.content.opacity = 100;
  },

  profileInfo () {
    return (
      <form onSubmit={this.handleSubmit}>

      </form>
    );
  },

  render () {
    return (
      <div>
        <button onClick={this._handleClick}>Edit Profile</button>

        <Modal
          isOpen={ this.state.modalOpen }
          onAfterOpen={ this.onModalOpen }
          onRequestClose={ this.onModalClose }
          style={EditStyle}>

        </Modal>
      </div>
    );
  }
});

module.exports = ProfileEdit;
