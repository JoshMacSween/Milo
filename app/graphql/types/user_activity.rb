module Types
  class UserActivity < BaseObject
    field :id, ID, null: false
    field :weight, Integer, null: false
    field :reps, Integer, null: false
  end
end