json.username   follow.username
json.first_name follow.first_name
json.last_name  follow.last_name
json.followers  follow.followers.map(&:id).length
json.avatar_url asset_path(follow.avatar.url(:avatar))
