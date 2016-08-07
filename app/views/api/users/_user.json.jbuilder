json.extract! user, :id, :username

json.followees user.followees.map(&:id)
json.followers user.followers.map(&:id)
