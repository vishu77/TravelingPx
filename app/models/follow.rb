class Follow < ActiveRecord::Base
  belongs_to :followee, class_name: "User", foreign_key: :followee_id
  belongs_to :follower, class_name: "User", foreign_key: :follower_id

  validates :followee_id, :follower_id, presence: true;
  validates :follower, uniqueness: { scope: :followee }
end
