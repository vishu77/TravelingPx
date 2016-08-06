const Store = require('flux/utils').Store;
const PhotoConstants = require('../constants/photo_constants');
const AppDispatcher = require('../dispatcher/dispatcher');

let _photos = {};

const PhotoStore = new Store(AppDispatcher);

const _removePhoto = (photo) => {
  delete _photos[photo.id];
  PhotoStore.__emitChange();
};

const _resetPhotos = (photos) => {
  _photos = {};

  photos.forEach((photo) => {
    _photos[photo.id] = photo;
  });
  PhotoStore.__emitChange();
};

const _resetPhoto = (photo) => {
  _photos[photo.id] = photo;
  PhotoStore.__emitChange();
};

PhotoStore.all = () => {
  let photos = [];
  for (let photoID in _photos) {
    photos.push(_photos[photoID]);
  }
  return photos;
};

PhotoStore.find = (photoID) => {
  return _photos[photoID];
};

PhotoStore.__onDispatch = (payload) => {
  switch(payload.actionType) {
    case PhotoConstants.PHOTOS_RECEIVED:
      _resetPhotos(payload.photos);
      break;

    case PhotoConstants.PHOTO_RECEIVED:
      _resetPhoto(payload.photo);
      break;

    case PhotoConstants.PHOTO_REMOVED:
      _removePhoto(payload.photo);
      break;
  }
};

module.exports = PhotoStore;
