const AppDispatcher = require('../dispatcher/dispatcher');
const PhotoConstants = require('../constants/photo_constants');
const PhotoUtil = require('../utils/photo_api_util');

const PhotoActions = {
  fetchAllPhotos () {
    PhotoUtil.fetchAllPhotos(this.receiveAllPhotos);
  },

  fetchSinglePhoto (photoID) {
    PhotoUtil.fetchSinglePhoto(photoID, this.receiveSinglePhoto);
  },

  uploadPhoto (formData) {
    PhotoUtil.uploadPhoto(formData, this.receiveSinglePhoto);
  },

  updatePhoto (photo) {
    PhotoUtil.updatePhoto(photo, this.receiveSinglePhoto);
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
