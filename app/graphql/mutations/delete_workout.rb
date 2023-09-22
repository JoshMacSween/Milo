module Mutations
  class DeleteWorkout < BaseMutation
    argument :id, ID, required: true

    type Types::WorkoutType

    def resolve(id:)
      deleted_workout = Workout.find(id)
      deleted_workout.delete
    end
  end
end
