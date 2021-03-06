class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)
    @comment.author_id = current_user.id

    if @comment.save
      render 'api/comments/show'
    else
      @comment = @comment.errors.full_messages
      render "api/shared/errors", status: 422
    end
  end

  def index
    photo = Photo.find(params[:photoId])
    @comments = photo.comments.includes(:author)
    
    render 'api/comments/index'
  end

  private

  def comment_params
    params.require(:comment).permit(:photo_id, :comment)
  end
end
