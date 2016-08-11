json.followeeId @follow.followee_id
json.followerId @follow.follower_id
json.avatar_url @follow.follower.avatar.url(:avatar)
json.username   @follow.follower.username
json.followers  @follow.follower.followers.map(&:id).length
