module Mutations
  class CreateWorkout < BaseMutation
    argument :title, String, required: true
    argument :comments, String, required: false
    argument :exercises, String, required: true

    type Types::WorkoutType

    def resolve(title: nil, comments: nil, exercises: nil)
      Workout.create!(
        title: title,
        comments: comments,
        exercises: exercises
      )
    end
  end
end