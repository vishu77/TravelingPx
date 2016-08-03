const Store = require('flux/utils').Store;
const PhotoConstants = require('../constants/photo_constatns');
const AppDispatcher = require('../dispatcher/dispatcher');

let _photos = {};

const PhotoStore = new Store(AppDispatcher);

PhotoStore.all = () => {

};

module.exports = PhotoStore;
