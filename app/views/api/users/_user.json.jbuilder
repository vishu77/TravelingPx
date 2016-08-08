json.extract! user, :id, :username, :first_name, :last_name, :description
json.avatar_url asset_path(user.avatar.url)
json.cover_url asset_path(user.cover.url)

json.followees user.followees.map(&:id)
json.followers user.followers.map(&:id)

json.photos user.photos.each do |photo|
  json.partial! "api/photos/photo", photo: photo
end
