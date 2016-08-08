const React = require('react');
const Modal = require('react-modal');
const Dropzone = require('react-dropzone');
const EditStyle = require('./edit_style');
const SessionActions = require('../../actions/session_actions');

const ProfileEdit = React.createClass({
  getInitialState () {
    let profile = this.props.profile;
    return {
      first_name: profile.first_name ? profile.first_name : "",
      last_name: profile.last_name ? profile.last_name : "",
      about: profile.about ? profile.about : "",
      coverFile: null, coverURL: profile.cover_url,
      avatarFile: null, avatarURL: profile.avatar_url,
      modalOpen: false
    };
  },

  _handleClick () {
    this.setState({ modalOpen: true });
  },

  _handleSubmit (e) {
    e.preventDefault ();
    SessionActions.updateProfile(this.state);
    this.setState({ modalOpen: false });
  },

  onModalClose (e) {
    e.preventDefault();
    this.setState({ modalOpen: false });
    EditStyle.content.opacity = 0;
  },

  onModalOpen () {
    EditStyle.content.opacity = 100;
  },

  updateProps (property) {
    return (e) => this.setState({ [property]: e.target.value });
  },

  onDropAvatar (image) {
    let file = image[0];
    let reader = new FileReader();

    reader.onloadend = () => {
      this.setState({ imageURL: reader.result, imageFile: file });
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ imageURL: "", imageFile: null });
    }
  },

  onDropCover (image) {
    let file = image[0];
    let fileReader = new FileReader();

    fileReader.onloadend = () => {
      this.setState({ coverFile: file, coverURL: fileReader.result });
    };

    if (file) {
      fileReader.readAsDataURL(file);
    }
  },

  profileInfo () {
    return (
      <form onSubmit={this.handleSubmit}>
        <Dropzone
            className="cover-drop-zone"
            multiple={false} disableClick={false}
            accept='image/*' onDrop={this.onDropCover}>
            <img src={this.state.coverURL} />
        </Dropzone>

        <div className="profile-edit">
          <Dropzone
              className="avatar-drop-zone"
              multiple={false} disableClick={false}
              accept='image/*' onDrop={this.onDropAvatar}>
              <img src={this.state.avatarURL} />
          </Dropzone>

          <div className="main-box">
            <label>
              Name
            </label>
            <input type="text"
              onChange={this.updateProps("first_name")}
              placeholder="First Name"
              value={this.state.first_name} />
            <input type="text"
              onChange={this.updateProps("last_name")}
              placeholder="Last Name"
              value={this.state.last_name} />
          </div>

          <div className="about-box">
            <label>
              About (Optional)
            </label>
            <textarea className="form-inputs"
              value={this.state.about}
              onChange={this.updateProps("about")}
              placeholder="Tell us about your travels." />
          </div>
        </div>

        <div className="edit-profile-buttons">
          <button className="cancel-button"
            onClick={this.onModalClose}>
            Cancel
          </button>

          <button className="edit-button"
            onClick={this._handleSubmit}>
            Save</button>
        </div>
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

          { this.profileInfo() }
        </Modal>
      </div>
    );
  }
});

module.exports = ProfileEdit;
