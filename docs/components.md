## Component Hierarchy

**Bolded** components are associated with routes.

(:exclamation: Remember, the bolded components are created by their
associated routes, so the nesting of your bolded components must
_**exactly**_ match the nesting of your routes.)

* **App**
  * Navbar
    * **Home**
    * **LoginForm**
    * **SignupForm**
  * **PhotosIndex**
    * PhotoForm
    * PhotoIndexItem
    * **PhotoDetail**
      * PhotoEdit
  * ProfilePage
    * **ProfileDetail**

## Bonus
* **Comments**
* **Likes**
* **Taggings**
* **Discover**

## Routes

* **component:** `App` **path:** `/`
  * **component** `LoginForm` **path:** `/login`
  * **component** `SignupForm` **path:** `/signup`
  * **component:** `ProfilePage` **path:** `/users/username`
    * **component:** `PhotosIndex` **path:** `/users/photos`
      * **component:** `PhotoDetail` **path:** `/users/photos/:photoId`
        * **component:** `PhotoEdit` **path:** `/users/photos/:photoId/edit`
  * **component:** `PhotoIndex` **path:** `/photos`
    * **component:** `PhotoDetail` **path:** `/photos/:photoId`
  * **component:** `UserDetail` **path:** `/username`

For Routes that have no `photoId`, `PhotoIndex` will render all
photos.
