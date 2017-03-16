class Changenullrequirment < ActiveRecord::Migration[5.0]
  def change
    remove_column :tasks, :startDate
    add_column :tasks, :startDate, :datetime, null: false

    remove_column :tasks, :endDate
    add_column :tasks, :endDate, :datetime, null: false

    remove_column :tasks, :estimate
    add_column :tasks, :estimate, :datetime, null: false

    remove_column :tasks, :user_id
    add_column :tasks, :user_id, :integer, null: false
  end
end
