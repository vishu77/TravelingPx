# TravelingPx

[Heroku link][heroku]

[heroku]: https://travelingpx.herokuapp.com/

## Minimum Viable Product

TravelingPx is a web application inspired by 500px that will be build using Ruby on Rails and React.js. By the end of Week 9, this app will, at a minimum, satisfy the following criteria:

- [x] Hosting on Heroku
- [x] New account creation, login, and guest/demo login
- [ ] A production README, replacing this README (**NB**: check out the [sample production README](docs/production_readme.md) -- you'll write this later)
- [x] Post Pictures
  - [x] Smooth, bug-free navigation
  - [x] Adequate seed data to demonstrate the site's features
  - [x] Adequate CSS styling
- [x] Follow Users
  - [x] Smooth, bug-free navigation
  - [x] Adequate seed data to demonstrate the site's features
  - [x] Adequate CSS styling
- [ ] Profile Page
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
- [ ] Home Feed
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling

## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Cycles][flux-cycles]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: docs/views.md
[components]: docs/components.md
[flux-cycles]: docs/flux-cycles.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days, W1 W 6pm)

**Objective:** Functioning rails project with front-end Authentication

- [x] create new project
- [x] create `User` model
- [x] authentication backend setup
- [x] create `StaticPages` controller and root view
- [x] set up webpack & flux scaffold with skeleton files
- [x] setup `SessionUtil` to interact with the API
- [x] set up flux cycle for frontend auth
- [x] user signup/signin components
- [x] blank landing component after signin
- [x] style signin/signup components

### Phase 2: Photos, API, and components (2 days, W1 F 6pm)

**Objective:** Uploaded Photos can be created, read, edited and destroyed through
the API.

- [x] create `Photo` model
- [x] seed the database with a small amount of test data
- [x] CRUD API for Photo (`PhotosController`)
- [x] jBuilder views for photos
- [x] test out API interaction in the console.
- implement each photo component, building out the flux loop as needed.
  - [x] `PhotosIndex`
  - [x] `PhotosIndexItem`
  - [x] `PhotoForm for uploading and editing`
  - [x] `PhotoDetail`
- [x] save Photos to the DB when the form loses focus or is left idle after editing.
- [x] basic styling for existing components

### Phase 3: Follow Users (1 day, W2 Mon 6pm)

**Objective:** Allows users to follow other users

- [x] create `FollowToggle` (`FollowButton`)
- build out omponents for:
  - [x] Follow CRUD
  - [x] FollowToggle allowing to follow and unfollow user
  - [x] Update database for followed and following
- Use CSS to style new components

Phase 3 adds follow to the users which will provide a list of followers and list of people who are follow user.
Follow information will be listed on the profile page of each user.

### Phase 4: Profile Page (2 days, W2 W 6pm)

**objective:** Redirects to user page to see their photos and information. Also to allow editing of user information.

- build out API, Flux loop, and components for:
  - [ ] Fetch user information
  - [ ] Allow user to edit and update their information
- [ ] Fetch User information from database
- [ ] Style the profile page.

### Phase 5: Home Feed (2 days, W2 F 6pm)

**Objective:** Flushing out the users profile with a photo feed from users who we are following.

- [ ] Using photosIndex to make a Home Feed
- build out API, Flux loop, and components for:
- [ ] Fetch photos from followed users
- [ ] Infinite scrolling for the home feed
- [ ] Include suggestions for follow sidebar
- [ ] Randomly suggest other uses not already followed
- [ ] Stationary side bar
- [ ] Style new elements

### Bonus Phases: Tagging, Comments Likes, Infinite Scrolling, Follow Suggestions

### Bonus Features (TBD)
- [ ] Likes
- [ ] Comments
- [ ] Tagging (Key Words)
- [ ] OAuth (Facebook, Twitter, Google)
- [ ] Discover with infinite scrolling
- [ ] Follow Suggestions
- [ ] Gallery
- [ ] Ratings
- [ ] Notifications

[phase-one]: docs/phases/phase1.md
[phase-two]: docs/phases/phase2.md
[phase-three]: docs/phases/phase3.md
[phase-four]: docs/phases/phase4.md
[phase-five]: docs/phases/phase5.md
