class Changecolumnnameagain < ActiveRecord::Migration[5.0]
  def change
    remove_column :users, :password_diget
    add_column :users, :password_digest, :string, null: false
  end
end
