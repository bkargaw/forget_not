# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  email           :string           not null
#  username        :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  password_digest :string           not null
#

class User < ApplicationRecord
  validates :username, :email, :password_digest, presence: true
  validates :username, :email, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  after_validation :ensure_session_token

  attr_reader :password

  def self.find_by_credential(option)
    if option[:username]
      user = User.find_by_username(option[:username])
    else
      user = User.find_by_email(option[:email])
    end

    return user if user && user.is_password?(option[:password])
    nil
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest) == password
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end


end
