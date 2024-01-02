module Types
  class MutationType < Types::BaseObject
    field :create_workout, mutation: Mutations::CreateWorkout
    field :delete_workout, mutation: Mutations::DeleteWorkout
    field :edit_workout, mutation: Mutations::EditWorkout
    field :create_exercise, mutation: Mutations::CreateExercise
    field :add_set, mutation: Mutations::AddWorkoutSet
    field :edit_set, mutation: Mutations::EditWorkoutSet
  end
end
