# == Schema Information
#
# Table name: lists
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :integer          not null
#

class List < ApplicationRecord
  validates :name, presence: true
  belongs_to :user
  has_many :tasks
end
