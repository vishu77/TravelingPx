class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render "api/users/show"
    else
      @errors = @user.errors.full_messages
      render "api/shared/errors", status: 422
    end
  end

  def show
    @user = User.find(params[:id])
    if @user
      render "api/users/show"
    else
      render json: nil, status: 404
    end
  end

  def update
    @user = current_user

    @user.update(update_params)
    render "api/users/show"
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end

  def update_params
    params.require(:user).permit(:first_name,
      :last_name, :about,
      :avatar, :cover)
  end
end
