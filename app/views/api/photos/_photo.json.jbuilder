json.id           photo.id
json.title        photo.title
json.description  photo.description
json.image_url    asset_path(photo.image.url)

json.poster       photo.poster.username
json.poster_id    photo.poster.id
json.avatar_url   asset_path(photo.poster.avatar.url)
