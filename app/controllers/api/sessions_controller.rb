class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      login(@user)
      render "api/users/show"
    else
      @errors = ["Invalid Username/Password combination"]
      render "api/shared/errors", status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render "api/users/show"
    else
      @errors = ["Nobody Currently Signed In"]
      render "api/shared/errors", status: 404
    end
  end

  def show
    if current_user
      @user = current_user
      render "api/users/show"
    else
      render json: nil, status: 404
    end
  end
end
