class Api::FollowsController < ApplicationController
  before_action :require_logged_in

  def create
    @follow = Follow.new(
      followee_id: follow_params[:poster_id],
      follower_id: current_user.id
    )

    if @follow.save
      render '/api/follows/show', status: 200
    else
      @errors = @follow.errors.full_messages
      render "api/shared/errors", status: 422
    end
  end

  def destroy
    @follow = Follow.find_by(
      followee_id: follow_params[:poster_id],
      follower_id: current_user.id
    )

    if @follow.destroy
      render 'api/follows/show', status: 200
    else
      @errors = follow.errors.full_messages
      render 'api/shared/errors', status: 422
    end
  end

  private

  def follow_params
    params.require(:follow).permit(:poster_id)
  end
end
