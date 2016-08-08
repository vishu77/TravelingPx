const React = require('react');
const Masonry = require('react-masonry-component');
const Modal = require('react-modal');
const PhotoStore = require('../../stores/photo');
const PhotoIndexItem = require('../photo/index_item');
const SessionStore = require('../../stores/session');
const SessionActions = require('../../actions/session_actions');
const FollowButton = require('./follow_button');

const Profile = React.createClass({
  getInitialState () {
    return { profile: null };
  },

  _onChange () {
    this.setState({ profile: SessionStore.profile() });
  },

  componentDidMount () {
    this.profileListener = SessionStore.addListener(this._onChange);
    SessionActions.fetchProfile(this.props.params.userId);
  },

  componentWillUnmount () {
    this.profileListener.remove();
  },

  profileGallery () {
    return this.state.profile.photos.map((photo) => {
      return <PhotoIndexItem photo={photo} key={photo.id} />;
    });
  },

  render () {
    if (this.state.profile) {
      let profileOwner = this.state.profile;
      debugger

      return (
        <main className="profile">
          <div className="profile-cover">
          </div>

          <ul className="profile-info">
            <li>{`${profileOwner.first_name} + ${profileOwner.last_name}`}</li>
            <li>{profileOwner.username}</li>
            <li><p>{profileOwner.description}</p></li>
            <li>{profileOwner.followers.length}</li>
            <li>{profileOwner.followees.length}</li>
          </ul>

          <ul className="profile-gallery">
            { this.profileGallery() }
          </ul>
        </main>
      );
    } else {
      return (
        <div>
        </div>
      );
    }

  }
});

module.exports = Profile;
