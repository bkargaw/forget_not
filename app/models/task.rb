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
#  startDate  :datetime         not null
#  endDate    :datetime         not null
#  estimate   :datetime         not null
#  user_id    :integer          not null
#  list_id    :integer
#

class Task < ApplicationRecord
  validates :title, :startDate, :endDate, :estimate, presence: true
  validates :completed, :repeats, :list, :user, presence: true
  # validates :list, presence: true

  belongs_to :user
  # belongs_to :list

  before_validation :ensure_values

  private

  def ensure_values
    # ensure_startDate
    self.startDate ||= Time.now.to_datetime
    # ensure_endDate
    self.endDate ||= Time.new(3000).to_datetime
    # ensure_estimate
    self.estimate ||= Time.new(3000).to_datetime
    # ensure_completed
    self.completed ||= false
    # ensure_repeats
    self.repeats ||= false
  end
end
