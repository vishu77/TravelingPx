class UpdatePhotos < ActiveRecord::Migration
  def change
    rename_column :photos, :url, :image_url
  end
end
