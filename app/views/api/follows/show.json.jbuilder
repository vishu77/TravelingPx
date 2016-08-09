json.followeeId @follow.followee_id
json.followerId @follow.follower_id
json.avatar_url @follow.follower.avatar

if @follow.first_name
  json.name   (follower.first_name + " " + follower.last_name)
else
  json.name   follower.username
end
