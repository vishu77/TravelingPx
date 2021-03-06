json.id           photo.id
json.poster_id    photo.poster_id
json.title        photo.title
json.description  photo.description
json.image_small  asset_path(photo.image.url(:small))
json.image_url    asset_path(photo.image.url(:FHD))
json.created_at   photo.created_at
json.avatar_url   asset_path(photo.poster.avatar.url(:avatar))
json.username     photo.poster.username
json.followers    photo.poster.followers.map(&:id)

if photo.poster.first_name
  json.poster     (photo.poster.first_name + " " + photo.poster.last_name)
else
  json.poster     ""
end
