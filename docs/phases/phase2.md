# Phase 2: Flux Architecture and Photos CRUD (2 days, W1 F 6pm)

## Rails
### Models
* Photo

### Controllers
* Api::PhotosController (create, destroy, index, show, update)

### Views
* photos/index.json.jbuilder
* photos/show.json.jbuilder

## Flux
### Views (React Components)
* PhotosIndex
  - PhotosIndexItem
* PhotosForm
* PhotoDetail

### Stores
* Photos

### Actions
* `ApiActions.receiveAllPhotos`
* `ApiActions.receiveSinglePhoto`
* `ApiActions.deletePhoto`
* `PhotoActions.fetchAllPhotoss`
* `PhotoActions.fetchSinglePhoto`
* `PhotoActions.createPhoto`
* `PhotoActions.editPhoto`
* `PhotoActions.destroyPhoto`

### ApiUtil
* `PhotoUtil.fetchAllPhotos`
* `PhotoUtil.fetchSinglePhoto`
* `PhotoUtil.createPhoto`
* `PhotoUtil.editPhoto`
* `PhotoUtil.destroyPhoto`

## Gems/Libraries
* paperclip (Gem)
* Cloudinary (react)
