json.extract! user, :id, :username, :first_name, :last_name, :about, :city, :country
json.avatar_url asset_path(user.avatar.url)
json.cover_url asset_path(user.cover.url)

json.followees user.followees do |followee|
    json.followeeId followee.id

  if followee.first_name
    json.name   followee.first_name + " " + followee.last_name
  else
    json.name   followee.username
  end

  json.avatar_url asset_path(followee.avatar.url)
end

json.followers user.followers do |follower|
  json.id       follower.id

  if follower.first_name
    json.name   (follower.first_name + " " + follower.last_name)
  else
    json.name   follower.username
  end

  json.avatar_url json.avatar_url asset_path(follower.avatar.url)
end
