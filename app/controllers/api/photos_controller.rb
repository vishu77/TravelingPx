class Api::PhotosController < ApplicationController
  def create
    @photo = Photo.new(photo_params)

    if @photo.save
      render json: @bench
    else
      render json: @photo.errors.full_messages
    end

  end

  def destroy

  end

  def index

  end

  def show

  end

  def edit

  end

  def update

  end

  private

  def photo_params
    params.require(:photo).permit(:title, :description, :url)
  end

end
