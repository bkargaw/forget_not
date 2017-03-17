class Changeestimatetostring < ActiveRecord::Migration[5.0]
  def change
    remove_column :tasks, :estimate
    add_column :tasks, :estimate, :string
  end
end
