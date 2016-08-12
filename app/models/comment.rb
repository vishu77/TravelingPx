class Comment < ActiveRecord::Base
  validates :comment, presence: true;

  belongs_to :author, class_name: "User", foreign_key: :author_id
  belongs_to :photo, class_name: "Photo", foreign_key: :photo_id
end
