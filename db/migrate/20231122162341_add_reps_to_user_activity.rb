class AddRepsToUserActivity < ActiveRecord::Migration[6.1]
  def change
    add_column :user_activities, :reps, :integer
  end
end
