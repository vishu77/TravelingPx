const React = require('react');
const Masonry = require('react-masonry-component');
const Modal = require('react-modal');
const PhotoStore = require('../../stores/photo');
const PhotoIndexItem = require('../photo/index');
const SessionStore = require('../../stores/session');
const SessionActions = require('../../actions/session_actions');
const FollowButton = require('./follow_button');

const Profile = React.createClass({
  getInitialState () {
    const profile = SessionActions.fetchProfile(this.props.params.userId);
    return { profile: profile };
  },

  render () {
    return (
      <div>
      </div>
    );
  }
});

module.exports = Profile;
