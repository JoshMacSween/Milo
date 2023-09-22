module Mutations
  class EditWorkout < BaseMutation
    argument :id, ID, required: true
    argument :title, String, required: false
    argument :exercises, String, required: false
    argument :comments, String, required: false

    type Types::WorkoutType

    def resolve(id:, title:, exercises:, comments:)
      edited_workout = Workout.find(id)
      edited_workout[:title] = title
      edited_workout[:exercises] = exercises
      edited_workout[:comments] = comments
      edited_workout.save!
      edited_workout
    end
  end
end
