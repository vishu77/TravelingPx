json.partial! 'api/users/user', user: @user

json.photos @user.photos do |photo|
  json.partial! "api/photos/photo", photo: photo
end

json.followees @user.followees do |followee|
  json.followerId @user.id
  json.followeeId followee.id
  json.partial! "api/follows/follow", follow: followee
end
