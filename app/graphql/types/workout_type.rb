module Types
  class WorkoutType < BaseObject
    field :id, ID, null: false
    field :title, String, null: false
    field :comments, String, null: true
    field :exercises, [Types::ExerciseType], null: true
  end
end 