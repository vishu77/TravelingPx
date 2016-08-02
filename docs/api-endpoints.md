# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`
- `GET /api/session`

### Photos

- `GET /api/photos`
  - accepts `tag_name` query param to list photos by tag
  - accepts pagination params (if I get there)
- `POST /api/photos`
- `GET /api/photos/:id`
- `PATCH /api/photos/:id`
- `DELETE /api/photos/:id`

### Follows

- `GET /api/follows`
- `POST /api/follows`
- `DELETE /api/follows/:followid`

### User Profile

- `GET /api/users/:user_id/profile`
- `PATCH /api/users/:user_id/edit`

## Bonus

### Likes

- `GET /api/photos/:photo_id/likes`
- `POST /api/photos/:photo_id/likes`
- `DELETE /api/follows/:like_id`

### Comments

- `GET /api/photos/:photo_id/comments`
- `POST /api/photos/:photo_id/comments`
- `DELETE /api/follows/:comment_id`

### Tags

- A Photo's tags will be included in the photo show template
- `GET /api/tags`
  - includes query param for typeahead suggestions
- `POST /api/photos/:note_id/tags`: add tag to photo by name
  - if tag doesn't already exist, it will be created
- `DELETE /api/photo/:photo_id/tags/:tag_name`: remove tag from note by name
