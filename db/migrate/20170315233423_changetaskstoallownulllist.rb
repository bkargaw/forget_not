class Changetaskstoallownulllist < ActiveRecord::Migration[5.0]
  def change
    remove_column :tasks, :list_id
    add_column :tasks, :list_id, :integer
  end
end
