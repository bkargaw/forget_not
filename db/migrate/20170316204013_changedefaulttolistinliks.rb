class Changedefaulttolistinliks < ActiveRecord::Migration[5.0]
  def change
    remove_column :tasks, :list_id
    add_column :tasks, :list_id, :integer, default: 1
  end
end
