# == Schema Information
#
# Table name: users
#
#  id                  :integer          not null, primary key
#  username            :string           not null
#  password_digest     :string           not null
#  session_token       :string           not null
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#  avatar_file_name    :string
#  avatar_content_type :string
#  avatar_file_size    :integer
#  avatar_updated_at   :datetime
#

class User < ActiveRecord::Base
  validates :session_token, presence: true
  validates :username, uniqueness: true, presence: true
  validates :password_digest, presence: { message: "Password can't be blank" }
  validates :password, length: { minimum: 6, allow_nil: true }


  # has_attached_file :avatar, default_url: "default.png"
  # validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\Z/

  attr_reader :password

  has_many(
    :photos,
    class_name: "Photo",
    foreign_key: :poster_id,
    primary_key: :id
  )

  before_validation :ensure_session_token

  def self.find_by_credentials(username, password)
    user = User.find_by_username(username)
    return user if user && user.is_password?(password)
    nil
  end

  def self.generate_session_token
    token = SecureRandom::urlsafe_base64(16)

    while User.find_by(session_token: token)
      token = SecureRandom::urlsafe_base64(16)
    end

    token
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  private

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end
end
