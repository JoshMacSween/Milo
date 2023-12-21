module Types
  class WorkoutType < BaseObject
    field :id, ID, null: false
    field :title, String, null: false
    field :comments, String, null: true
    field :user_activities, [Types::UserActivityType], null: true
  end
end 