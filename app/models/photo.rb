# == Schema Information
#
# Table name: photos
#
#  id                 :integer          not null, primary key
#  poster_id          :integer          not null
#  title              :string           not null
#  description        :text
#  image_url          :string           not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class Photo < ActiveRecord::Base
  validates :title, presence: true
  validates :poster_id, presence: true

  has_attached_file :image, default_url: ""
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  belongs_to :poster, class_name: "User", foreign_key: :poster_id
end
