class Api::PhotosController < ApplicationController
  def create
    @photo = Photo.new(photo_params)
    @photo.poster_id = current_user.id

    if @photo.save
      render "api/photos/show"
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end

  def destroy
    photo = Photo.find(params[:id])
    photo.delete
    render json: photo
  end

  def index
    @photos = Photo.all
    render "api/photos/index"
  end

  def show
    @photo = Photo.find(params[:id])
    render "api/photos/show"
  end

  def update
    @photo = Photo.find(params[:id])

    if @photo.update(photo_params)
      render "api/photos/show"
    else
      render json: ["can't update photo"], status: 404
    end
  end

  private

  def photo_params
    params.require(:photo).permit(:title, :description, :url)
  end
end
