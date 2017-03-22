# == Schema Information
#
# Table name: tasks
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  completed  :boolean          not null
#  repeats    :boolean          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :integer          not null
#  estimate   :string
#  startDate  :float
#  endDate    :float
#  list_id    :integer          default("1")
#

class Task < ApplicationRecord
  validates :title, :user, presence: true

  belongs_to :user
  belongs_to :list

  before_validation :ensure_values

  private
  
  def ensure_values
    # ensure_completed
    self.completed ||= false
    # ensure_repeats
    self.repeats ||= false
  end
end
