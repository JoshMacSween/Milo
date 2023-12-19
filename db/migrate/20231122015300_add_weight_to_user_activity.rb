class AddWeightToUserActivity < ActiveRecord::Migration[6.1]
  def change
    add_column :user_activities, :weight, :integer
  end
end
