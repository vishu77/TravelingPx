class CreatePhotos < ActiveRecord::Migration
  def change
    create_table :photos do |t|
      t.integer :poster_id, null: false
      t.string  :title, null: false
      t.text    :description
      t.string  :url, null: false

      t.timestamps null: false
    end

    add_index :photos, :poster_id
    add_index :photos, :url, unique: true
  end
end
