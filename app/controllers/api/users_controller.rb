class Api::UsersController < ApplicationController
  def create
    @user = User.new()

    if @user.save
      login(@user)
      render json: @user
    else
      render json: @user.errors.full_messages
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end