# Flux Cycles

Flux loops are organized by data type. Under each data type, there may
be sub-categories, and each action is listed with the sequence of events
that result from its invocation, ending with the API or store. Finally,
store listeners are listed at the end.

You should be able to use this document trace an **action** starting
with where it was invoked, through the **API**/**store** involved, and
finally to the **components** that update as a result. This is important
because once you start implementing your flux loops, that's precisely
what you'll need to do.

## Auth Cycles

### Session API Request Actions

* `signUp`
  0. invoked from `SignupForm` `onSubmit`
  0. `POST /api/users` is called.
  0. `receiveCurrentUser` is set as the success callback.
* `logIn`
  0. invoked from `Navbar` `onSubmit`
  0. `POST /api/session` is called.
  0. `receiveCurrentUser` is set as the callback.
* `logOut`
  0. invoked from `Navbar` `onClick`
  0. `DELETE /api/session` is called.
  0. `removeCurrentUser` is set as the success callback.
* `fetchCurrentUser`
  0. invoked from `App` in `didMount`
  0. `GET /api/session` is called.
  0. `receiveCurrentUser` is set as the success callback.

### Session API Response Actions

* `receiveCurrentUser`
  0. invoked from an API callback
  0. stores in `_currentUser` in `CurrentUserStore`
* `removeCurrentUser`
  0. invoked from an API callback
  0. removes `_currentUser` in `CurrentUserStore`

## Error Cycles

### Error API Response Actions
* `setErrors`
  0. invoked from API callbacks on error for actions that generate POST requests
  0. sets `form` and `_errors` in the `ErrorStore`
* `removeErrors`
  0. invoked from API callbacks on success for actions that generate POST requests
  0. removes `_errors` for a given `form` in the `ErrorStore`

## Photo Cycles

### Photos API Request Actions

* `fetchAllPhotos`
  0. invoked from `PhotoIndex` `didMount`/`willReceiveProps`
  0. `GET /api/notes` is called.
  0. `receiveAllPhotos` is set as the success callback.

* `createPhoto`
  0. invoked from new note button `onClick`
  0. `POST /api/photos` is called.
  0. `receiveSinglePhoto` is set as the success callback.

* `fetchSinglePhoto`
  0. invoked from `PhotoDetail` `didMount`/`willReceiveProps`
  0. `GET /api/photos/:id` is called.
  0. `receiveSinglePhoto` is set as the success callback.

* `updatePhoto`
  0. invoked from `PhotoForm` `onSubmit`
  0. `POST /api/photos` is called.
  0. `receiveSinglePhoto` is set as the success callback.

* `destroyPhoto`
  0. invoked from delete note button `onClick`
  0. `DELETE /api/photos/:photoId` is called.
  0. `removePhoto` is set as the success callback.

### Notes API Response Actions

* `receiveAllPhotos`
  0. invoked from an API callback.
  0. `Photo` store updates `_photos` and emits change.

* `receiveSinglePhoto`
  0. invoked from an API callback.
  0. `Photo` store updates `_photo[id]` and emits change.

* `removePhoto`
  0. invoked from an API callback.
  0. `Photo` store removes `_photo[id]` and emits change.

### Store Listeners

* `PhotosIndex` component listens to `Photo` store.
* `PhotoDetail` component listens to `Photo` store.


## Follow Cycles

### Follow API Request Actions

* `fetchStatus`
  0. invoked from `FollowsIndex` `didMount`/`willReceiveProps`
  0. `GET /api/follows` is called.
  0. `receiveStatus` is set as the success callback.

* `followUser`
  0. invoked from new notebook button `onClick`
  0. `POST /api/username` is called.
  0. `receiveFollow` is set as the callback.

* `unfollowUser`
  0. invoked from `Profile` `didMount`/`willReceiveProps`
  0. `GET /api/username` is called.
  0. `receiveUnfollow` is set as the success callback.

### Follow API Response Actions

* `receiveStatus`
  0. invoked from an API callback.
  0. `Follow` store updates `_follows` and emits change.

* `receiveFollow`
  0. invoked from an API callback.
  0. `Follow` store updates `_follows[id]` and emits change.

* `receiveUnfollow`
  0. invoked from an API callback.
  0. `follow` store removes `_follows[id]` and emits change.

### Store Listeners

* `PhotoIndex` component listens to `Photo` store.


## Home Feed Cycles

* `fetchHomeFeed`
  0. invoked from `PhotoIndex` `onChange` when there is text
  0. `GET /api/photos` is called with `followed` param.
  0. `receiveHomeFeed` is set as the success callback.

* `receiveHomeFeed`
  0. invoked from an API callback.
  0. `Photo` store updates `_photos` and emits change.

* `fetchUnfollowedUsers`
  0. invoked from `FollowIndex` `onChange` when there is text
  0. `GET /api/follows` is called with `status` param.
  0. `receiveUnfollowedUsers` is set as the success callback.

* `receiveUnfollowedUsers`
  0. invoked from `Follows` `onChange` when empty
  0. `Follows` store resets `_unfollowed` and emits change.

### Store Listeners

* `ProfileIndex` component listens to `Photo` and `Follow` store.
