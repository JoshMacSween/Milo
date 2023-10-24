module Mutations
  class CreateExercise < BaseMutation
    argument :name, String, required: true

    type Types::ExerciseType

    def resolve(name: nil)
      Exercise.create!(
        name: name
      )
    end
  end
end