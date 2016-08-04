# Phase 2: Flux Architecture and Photos CRUD (2 days, W1 F 6pm)

## Rails
### Models
* Photo

### Controllers
* Api::PhotosController (create, destroy, index, show, update)

### Views
* api/photos/index.json.jbuilder
* api/photos/show.json.jbuilder
* api/photos/`_`photo.json.jbuilder

## Flux
### Views (React Components)
* PhotosIndex
  - PhotosIndexItem
* PhotosForm
* PhotoDetail
* Splash (IndexRoute to hold all the components)

### Stores
* Photos

### Actions
* `PhotoActions.fetchAllPhotos`
* `PhotoActions.fetchSinglePhoto`
* `PhotoActions.uploadPhoto`
* `PhotoActions.updatePhoto`
* `PhotoActions.deletePhoto`
* `PhotoActions.receiveAllPhotos`
* `PhotoActions.receiveSinglePhoto`
* `PhotoActions.removePhoto`

### ApiUtils
* `PhotoUtil.fetchAllPhotos`
* `PhotoUtil.fetchSinglePhoto`
* `PhotoUtil.uploadPhoto`
* `PhotoUtil.updatePhoto`
* `PhotoUtil.deletePhoto`

## Gems/Libraries
* Cloudinary (react)
* "react-alerts"
* "react-modal"
* "react-masonry"
* "react-dropzone"
