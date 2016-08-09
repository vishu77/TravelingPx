json.extract! user, :id, :username, :first_name, :last_name, :about, :city, :country
json.avatar_url asset_path(user.avatar.url)
json.cover_url asset_path(user.cover.url)

json.followees user.followees do |followee|
  json.followeeId followee.id
  json.username   followee.username
  json.followers followee.followers.map(&:id).length
  json.avatar_url asset_path(followee.avatar.url)
end

json.followers user.followers do |follower|
  json.followerId follower.id
  json.username   follower.username
  json.followers follower.followers.map(&:id).length
  json.avatar_url asset_path(follower.avatar.url)
end
