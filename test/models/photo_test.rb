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

require 'test_helper'

class PhotoTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
