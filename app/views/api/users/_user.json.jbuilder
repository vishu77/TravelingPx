json.extract! user, :id, :username

json.followees user.followees
json.followers user.followers.map(&:id)
