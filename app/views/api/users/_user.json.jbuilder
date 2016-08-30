json.extract! user, :id, :username, :first_name, :last_name, :about, :city, :country
json.avatar_url asset_path(user.avatar.url(:avatar))
json.cover_url asset_path(user.cover.url(:FHD))
json.photos   user.photos.map(&:id)

json.followers user.followers do |follower|
  json.followerId follower.id
  json.followeeId user.id
  json.username   follower.username
  json.first_name follower.first_name
  json.last_name  follower.last_name
  json.followers  follower.followers.map(&:id).length
  json.avatar_url asset_path(follower.avatar.url(:avatar))
end
