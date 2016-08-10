const PhotoUtil = {
  deletePhoto (id, callBack) {
    $.ajax({
      url: `/api/photos/${id}`,
      method: "DELETE",
      success (data) {
        callBack(data);
      }
    });
  },

  fetchAllPhotos (callBack) {
    $.ajax({
      url: '/api/photos',
      method: 'GET',
      success (data) {
        callBack(data);
      }
    });
  },

  fetchHomeFeed(callBack) {
    $.ajax({
      url: '/api/homefeed',
      method: "GET",
      success (photos) {
        callBack(photos);
      }
    });
  },

  fetchSinglePhoto (id, callBack) {
    $.ajax({
      url: `/api/photos/${id}`,
      method: 'GET',
      success (data) {
        callBack(data);
      }
    });
  },

  updatePhoto (photo, callBack) {
    $.ajax({
      url: `/api/photos/${photo.id}`,
      method: 'PATCH',
      data: { photo: photo },
      success (data) {
        callBack(data);
      }
    });
  },

  uploadPhoto (formData, callBack) {
    $.ajax({
      url: `/api/photos`,
      method: 'POST',
      processData: false,
      contentType: false,
      data: formData,
      success (data) {
        callBack(data);
      }
    });
  }
};

module.exports = PhotoUtil;
