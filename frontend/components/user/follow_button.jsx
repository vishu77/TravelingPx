const React = require('react');
const FollowActions = require('../../actions/follow_actions');
const SessionStore = require('../../stores/session');
const SessionActions = require('../../actions/session_actions');
const UserStore = require('../../stores/user');

const FollowButton = React.createClass({
  getInitialState () {
    return {
      currentUser: SessionStore.currentUser(),
      userProfile: UserStore.profile()
    };
  },

  componentDidMount () {
    this.followeeListener = SessionStore.addListener(this._onChange);
    SessionActions.fetchCurrentUser(this.state.currentUser);
  },

  componentWillUnmount () {
    this.followeeListener.remove();
  },

  _isFollowed () {
    let followText = "Follow";

    if (SessionStore.isUserLoggedIn() &&
      this.state.currentUser.id !== this.props.poster_id) {
      const userFollowers = this.state.userProfile.followers;

      if (userFollowers.find((follow) => follow.followerId === this.state.currentUser.id)) {
        followText = "Unfollow";
      }
    }

    return followText;
  },

  _onChange () {
    this.setState({
      currentUser: SessionStore.currentUser() ,
      userProfile: UserStore.profile()
    });
  },

  toggleFollow () {
    const data = { poster_id: this.props.poster_id };

    if (this._isFollowed() === "Follow") {
      FollowActions.createFollow(data);
    } else {
      FollowActions.deleteFollow(data);
    }
  },

  render () {
    let currentUser = SessionStore.currentUser();

    if (SessionStore.isUserLoggedIn() &&
      currentUser.id !== this.props.poster_id) {
      return (
        <button onClick={ this.toggleFollow } className="follow-button">
          { this._isFollowed() }
        </button>
      );
    } else {
      return (
        <div>
        </div>
      );
    }
  }

});

module.exports = FollowButton;
