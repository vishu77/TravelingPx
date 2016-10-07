json.array! @comments do |comment|
    json.partial! 'comment', comment: comment
    json.username   comment.author.username
    json.first_name comment.author.first_name
    json.last_name  comment.author.last_name
    json.avatar_url asset_path(comment.author.avatar.url(:avatar))
end
