const AppDispatcher = require('../dispatcher/dispatcher');
const PhotoConstants = require('../constants/photo_constants');
const PhotoUtil = require('../utils/photo_api_util');
const ErrorActions = require('./error_actions');

const PhotoActions = {
  fetchAllPhotos () {
    PhotoUtil.fetchAllPhotos(this.receiveAllPhotos);
  },

  fetchHomeFeed () {
    PhotoUtil.fetchHomeFeed(this.receiveHomeFeed);
  },

  fetchSinglePhoto (photoID) {
    PhotoUtil.fetchSinglePhoto(photoID, this.receiveSinglePhoto);
  },

  uploadPhoto (formData) {
    PhotoUtil.uploadPhoto(formData,
      this.receiveSinglePhoto,
      ErrorActions.clearErrors,
      ErrorActions.setErrors);
  },

  updatePhoto (photo) {
    PhotoUtil.updatePhoto(photo,
      this.receiveSinglePhoto,
      ErrorActions.clearErrors,
      ErrorActions.setErrors);
  },

  deletePhoto (photoID) {
    PhotoUtil.deletePhoto(photoID, this.removePhoto);
  },

  receiveAllPhotos (photos) {
    AppDispatcher.dispatch({
      actionType: PhotoConstants.PHOTOS_RECEIVED,
      photos: photos
    });
  },

  receiveHomeFeed (photos) {
    AppDispatcher.dispatch({
      actionType: PhotoConstants.HOMEFEED_RECEIVED,
      photos: photos
    });
  },

  receiveSinglePhoto (photo) {
    AppDispatcher.dispatch({
      actionType: PhotoConstants.PHOTO_RECEIVED,
      photo: photo
    });
  },

  removePhoto (photo) {
    AppDispatcher.dispatch({
      actionType: PhotoConstants.PHOTO_REMOVED,
      photo: photo
    });
  }
};

module.exports = PhotoActions;
