class ChangeUserActivityToSet < ActiveRecord::Migration[6.1]
  def change
    rename_table :user_activities, :sets
  end
end