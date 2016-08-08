class ColumnNameChange < ActiveRecord::Migration
  def change
    rename_column :users, :description, :about
  end
end
