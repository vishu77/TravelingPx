# TravelingPx

[TravelingPx][heroku]

[heroku]: http://www.travelingpx.stream/

TravelingPx is a photo sharing web application inspired by [500px][500px-link]. It utilizes Ruby on Rails, a PostgreSQL database, and React.js with a Flux architectural framework on the frontend. TravelingPx is truly a single-page application by using AJAX requests to update react components and deliver all content on one static page.


## Splash Page
The theme of the TravelingPx is traveling photos, but not just traveling around the world. It also includes imagery from games and other avenues which you can have an adventure.

![splashpage]

[500px-link]: https://500px.com/
[splashpage]: ./docs/images/splashpage.png

TravelingPx starts at the splash page allowing guests to check out already uploaded photos and user profiles.

## Features

### Photo viewing, uploading and editing

The main feature of TravelingPx is the ability to upload photos to showcase your travels. The photos are stored in a table within the database containing the photo file information, the title and a description. Users can edit or delete their photos when they are logged in.

![photoedit]
[photoedit]: ./docs/images/photoedit.png

The photos are uploaded using imagemagick and paperclip gem and then they are hosted on Amazon Web Services. React-dropzone is incorporated to provide drag and drop for easy uploading. When a photo is dropped or uploaded, it transitions to an upload form.

```JavaScript
photoDropped () {
  if (this.state.imageFile) {
    return (
      <PhotoForm imageURL={this.state.imageURL}
        imageFile={this.state.imageFile}
        close={this.onModalClose} />
    );
  } else {
    return (
      <Dropzone ref="dropzone"
          className="dropzone"
          activeClassName="dragging"
          multiple={false} disableClick={true}
          accept='image/*' onDrop={this.onDrop}>

        <button onClick={this._onOpenClick}>
          Browse Photos
        </button>

        <div>Or drag & drop photos anywhere in this box</div>
      </Dropzone>
    );
  }
},
```

### Follows and Profile

![follow]
[follow]: ./docs/wireframes/follows.png

TravelingPx also provides the ability to see the users that they are following and who they themselves are followed by. This allows of smooth navigation from profile to profile. All users profile data including followers and followings data is returned through jbuilder by utilizing the users table associations.

```Ruby
json.extract! user, :id, :username, :first_name, :last_name, :about, :city, :country
json.avatar_url asset_path(user.avatar.url(:avatar))
json.cover_url asset_path(user.cover.url(:FHD))
json.photos   user.photos.map(&:id)

json.followees user.followees do |followee|
  json.followerId user.id
  json.followeeId followee.id
  json.username   followee.username
  json.first_name followee.first_name
  json.last_name  followee.last_name
  json.followers  followee.followers.map(&:id).length
  json.avatar_url asset_path(followee.avatar.url(:avatar))
end

json.followers user.followers do |follower|
  json.followerId follower.id
  json.followeeId user.id
  json.username   follower.username
  json.first_name follower.first_name
  json.last_name  follower.last_name
  json.followers  follower.followers.map(&:id).length
  json.avatar_url asset_path(follower.avatar.url(:avatar))
end
```

![profile]
[profile]: ./docs/wireframes/profile.png

When logged in, users are able to edit their profile from their own profile page. They can change their name, location, about description, and upload or update their avatar or cover photos, both which also utilizes paperclip and AWS.


### Homefeed

![homefeed]
[homefeed]: ./docs/wireframes/homefeed.png

Lastly when logged in, users are provided with a homefeed instead of the splash page. Users will get updates from users who they are following when they upload new photos, sorted by the newest first.

```Ruby
def home
  following = []

  if current_user
    following = current_user.followees.map(&:id)
  end

  @photos = Photo.where(poster_id: following).order("created_at DESC")

  render 'api/photos/home'
end
```

## Future Directions for the Project
  - Follow suggestions and discover
  - Comments: Users can comment on photos
  - Tags: A tagging system allowing users to see all photos with the same tag.
  - Likes
  - OAuth: Allow users to sign up with gmail and facebook.
