json.partial! 'api/users/user', user: @user

json.photos @user.photos do |photo|
  json.partial! "api/photos/photo", photo: photo
end
