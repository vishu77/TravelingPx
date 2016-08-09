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
      city: profile.city ? profile.city : "",
      country: profile.country ? profile.country : "",
      coverFile: "", coverURL: profile.cover_url,
      avatarFile: "", avatarURL: profile.avatar_url,
      modalOpen: false
    };
  },

  _handleClick () {
    this.setState({ modalOpen: true });
  },

  _handleSubmit (e) {
    e.preventDefault ();

    let userId = this.props.profile.id;

    const formData = new FormData();

    formData.append("user[first_name]", this.state.first_name);
    formData.append("user[last_name]", this.state.last_name);
    formData.append("user[about]", this.state.about);
    formData.append("user[city]", this.state.city);
    formData.append("user[country]", this.state.country);
    formData.append("user[avatar]", this.state.avatarFile);
    formData.append("user[cover]", this.state.coverFile);

    SessionActions.updateProfile(formData, userId);
    this.setState({ modalOpen: false });
  },

  onModalClose (e) {
    e.preventDefault();
    let profile = this.props.profile;

    this.setState({
      first_name: profile.first_name ? profile.first_name : "",
      last_name: profile.last_name ? profile.last_name : "",
      about: profile.about ? profile.about : "",
      city: profile.city ? profile.city : "",
      country: profile.country ? profile.country : "",
      coverFile: "", coverURL: profile.cover_url,
      avatarFile: "", avatarURL: profile.avatar_url,
      modalOpen: false
    });

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
    let fileReader = new FileReader();

    fileReader.onloadend = () => {
      this.setState({ avatarFile: file, avatarURL: fileReader.result });
    };

    if (file) {
      fileReader.readAsDataURL(file);
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
      <form onSubmit={this._handleSubmit}>
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

          <div className="edit-box name-box">
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

          <div className="edit-box location-box">
            <label>
              Location
            </label>

            <input type="text"
              onChange={this.updateProps("city")}
              placeholder="City"
              value={this.state.city} />

            <input type="text"
              onChange={this.updateProps("country")}
              placeholder="Country"
              value={this.state.country} />
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

        <ul className="edit-profile-buttons">
          <li className="cancel-button"
            onClick={this.onModalClose}>
            Cancel
          </li>

          <input type="submit" className="save-button" value="Save" />
        </ul>
      </form>
    );
  },

  render () {
    return (
      <div>
        <button className="button edit-button" onClick={this._handleClick}>Edit Profile</button>

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
