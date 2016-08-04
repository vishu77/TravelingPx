# == Schema Information
#
# Table name: photos
#
#  id          :integer          not null, primary key
#  poster_id   :integer          not null
#  title       :string           not null
#  description :text
#  url         :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Photo < ActiveRecord::Base
  validates :title, presence: true
  validates :image_url, presence: true, uniqueness: true

  belongs_to(
    :poster,
    class_name: "User",
    foreign_key: :poster_id,
    primary_key: :id
  )
end
