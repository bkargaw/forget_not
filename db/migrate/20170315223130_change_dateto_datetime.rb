class ChangeDatetoDatetime < ActiveRecord::Migration[5.0]
  def change
    remove_column :tasks, :startDate
    add_column :tasks, :startDate, :datetime

    remove_column :tasks, :endDate
    add_column :tasks, :endDate, :datetime

    remove_column :tasks, :estimate
    add_column :tasks, :estimate, :datetime

  end
end
