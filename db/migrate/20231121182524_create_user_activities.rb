class CreateUserActivities < ActiveRecord::Migration[6.1]
  def change
    create_table :user_activities do |t|
      t.references :exercise, null: false, foreign_key: true
      t.references :workout, null: false, foreign_key: true

      t.timestamps
    end
  end
end

