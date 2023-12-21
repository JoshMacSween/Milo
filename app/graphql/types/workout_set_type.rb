module Types
  class WorkoutSetType < BaseObject
    field :id, ID, null: false
    field :weight, Integer, null: true
    field :reps, Integer, null: true
    field :exercise, Types::ExerciseType, null: false
  end
end