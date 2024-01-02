module Mutations
	class EditWorkoutSet < BaseMutation
		argument :workout_id, ID, required: true
		argument :exercise_id, ID, required: true
        argument :set_id, ID, required: true
		argument :reps, Integer, required: true
		argument :weight, Integer, required: true

		type Types::WorkoutSetType

		def resolve(exercise_id: nil, workout_id: nil, set_id: nil, reps: nil, weight: nil)
			workout_set = WorkoutSet.find_by(id: set_id)
			return nil unless workout_set
			
			workout_set.update(
				exercise_id: exercise_id,
				workout_id: workout_id,
				reps: reps,
				weight: weight
			)
			workout_set
		end
	end
end