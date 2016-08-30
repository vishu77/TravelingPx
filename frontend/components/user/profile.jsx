const React = require('react');
const Masonry = require('react-masonry-component');
const PhotoStore = require('../../stores/photo');
const PhotoIndexItem = require('../photo/index_item');
const SessionStore = require('../../stores/session');
const UserStore = require('../../stores/user');
const UserActions = require('../../actions/user_actions');
const FollowButton = require('./follow_button');
const FollowIndex = require('./follow_index');
const ProfileEdit = require('./profile_edit');

const masonryOptions = {
  isFitWidth: true,
	gutter: 10,
  transitionDuration: '1s'
};

const Profile = React.createClass({
  getInitialState () {
    return { profile: null };
  },

  _onUserChange () {
    this.setState({ profile: UserStore.profile() });
  },

  _handleClick () {
    this.setState({ modalOpen: true });
  },

  componentDidMount () {
    this.profileListener = UserStore.addListener(this._onUserChange);
    UserActions.fetchProfile(this.props.params.username);
  },

  componentWillReceiveProps (newProps) {
    UserActions.fetchProfile(newProps.params.username);
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
      let name = <h1>{profileOwner.username}</h1>;
      let about, city, country;
      let follow_or_edit = <FollowButton poster_id={ profileOwner.id } />;
      let coverClass = "empty-cover";

      if (profileOwner.cover_url) {
        coverClass = "profile-cover";
      }

      if (SessionStore.currentUser().id === profileOwner.id) {
        follow_or_edit = <ProfileEdit profile={this.state.profile} />;
      }

      if (profileOwner.about) {
        about = <p>{profileOwner.about}</p>;
      }

      if (profileOwner.city) {
        city = <li>{profileOwner.city}</li>;
      }

      if (profileOwner.country) {
        country = <li>{profileOwner.country}</li>;
      }

      if (profileOwner.first_name ) {
        name = (
          <h1>
            {`${profileOwner.first_name} ${profileOwner.last_name}`}
          </h1>
        );
      }

      return (
        <main className="profile">
          <div className={coverClass}>
            <img src={profileOwner.cover_url} />
          </div>

          <ul className="profile-info">
            <img className="profile-avatar"
                src={ profileOwner.avatar_url } />
            <div className="edit-or-follow">
              { follow_or_edit }
            </div>

            { name }
            { about }

            <li>
              <FollowIndex follows={profileOwner.followers}
                text="Followers" />
            </li>
            <li>
              <FollowIndex follows={profileOwner.followees}
                text="Following" />
            </li>

            { city }
            { country }
          </ul>

          <div className="profile-gallery">
            <div>
              <h2>{`Photos ${profileOwner.photos.length}`} </h2>
            </div>

            <Masonry className="gallery"
              elementType='ul'
              options={masonryOptions}
              disableImagesLoaded={false}>

              { this.profileGallery() }
            </Masonry>
          </div>
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
