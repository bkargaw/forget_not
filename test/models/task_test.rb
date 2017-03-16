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

require 'test_helper'

class TaskTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
