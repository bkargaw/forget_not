class CreateTasks < ActiveRecord::Migration[5.0]
  def change
    create_table :tasks do |t|
      t.string :title, null: false
      t.date :startDate, null: false
      t.date :endDate, null: false
      t.date :estimate, null: false
      t.boolean :completed, null: false
      t.boolean :repeats, null: false
      t.integer :list_id, null: false
      t.timestamps
    end
  end
end
