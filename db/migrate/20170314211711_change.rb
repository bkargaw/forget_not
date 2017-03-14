class Change < ActiveRecord::Migration[5.0]
  def change
    remove_column :users, :password_digets
    add_column :users, :password_diget, :string, null: false
  end
end
