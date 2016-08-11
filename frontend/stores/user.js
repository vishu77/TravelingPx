const Store = require('flux/utils').Store;
const AppDispatcher = require('../dispatcher/dispatcher');
const UserConstants = require('../constants/session_constants');
const FollowConstants = require('../constants/follow_constants');
const PhotoConstants = require('../constants/photo_constants');

let _profile = {};

const UserStore = new Store(AppDispatcher);

const _addFollow = (follower) => {
  _profile.followers.push(follower);
  UserStore.__emitChange();
};

const _addPhoto = (photo) => {
  _profile.photos.push(photo);
  UserStore.__emitChange();
};

const _setProfile = (profile) => {
  _profile = profile;
  UserStore.__emitChange();
};

const _removeFollow = (followerId) => {
  let index;
  _profile.followers.find((follow, idx) => {
    index = idx;
    return follow.followerId === parseInt(followerId);
  });

  _profile.followers.splice(index, 1);
  UserStore.__emitChange();
};

UserStore.profile = () => {
  return _profile;
};

UserStore.__onDispatch = (payload) => {
  switch (payload.actionType) {
    case UserConstants.PROFILE_RECEIVED:
      _setProfile(payload.profile);
      break;

    case FollowConstants.FOLLOW_RECEIVED:
      _addFollow(payload.follow);
      break;

    case FollowConstants.FOLLOW_REMOVED:
      _removeFollow(payload.follow.followerId);
      break;

    case PhotoConstants.PHOTO_RECEIVED:
      _addPhoto(payload.photo);
      break;
  }
};

module.exports = UserStore;
