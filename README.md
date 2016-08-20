# TravelingPx

[TravelingPx][heroku]

[heroku]: https://travelingpx.herokuapp.com/

TravelingPx is a full-stack web application that was modeled after [500px][500px-link]. It utilizes Ruby on Rails, a PostgreSQL database, and React.js with a Flux architectural framework on the frontend. TravelingPx is truly a single-page by utilizing ajax requests to deliver all content on one static page.


## Splash Page
The theme of the TravlingPx is traveling photos, but not just traveling around the world. It also includes imagery from games and other avenues which you can have an adventure.

![splashpage]

[500px-link]: https://500px.com/
[splashpage]: ./docs/images/splashpage.png

TravelingPx starts at the splash page allowing guests to check out already uploaded photos and user profiles.

## Features

### Photo Rendering and Editing

The main feature of TravelingPx is the ability to upload photos to showcase your travels. The photos are stored in a table with in the database containing upload the title and description of the photo. Users can edit their photos when they are logged in.

![photoedit]
[photoedit]: ./docs/images/photoedit.png

The images are uploaded using imagemagick and paperclip gem. The photos are then hosted on Amazon Web Services in three sizes for optimal loading on different parts of the app.

### Follows and Profile

![follow]
[follow]: ./docs/wireframes/follows.png

TravelingPx also provides the ability to see the users that are following and users who are followed by the user. This allows of smooth navigation from profile to profile.

![profile]
[profile]: ./docs/wireframes/profile.png

When logged in, users are able to edit their profile from their own profile page where they can change their name, location, about information and upload a new avatar or a new cover photo, both which also utilizes paperclip and AWS.

### Homefeed

Lastly when logged in, users are provided with a homefeed instead of the splash page. Users will get updates from users who they are following when they upload new photos, sorted by the newest first.

![homefeed]

[homefeed]: ./docs/wireframes/homefeed.png

## Future Directions for the Project
  - Comments: Users can comment on photos
  - Tags: A tagging system allowing users to see all photos with the same tag.
  - Likes
  - OAuth: Allow users to sign up with gmail and facebook.
