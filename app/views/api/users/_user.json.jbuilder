json.extract! user, :id, :username, :first_name, :last_name, :about
json.avatar_url asset_path(user.avatar.url)
json.cover_url asset_path(user.cover.url)

json.followees user.followees.map(&:id)
json.followers user.followers.map(&:id)
