class Changestartandendtimetostring < ActiveRecord::Migration[5.0]
  def change
    remove_column :tasks, :startDate
    add_column :tasks, :startDate, :float

    remove_column :tasks, :endDate
    add_column :tasks, :endDate, :float
  end
end
