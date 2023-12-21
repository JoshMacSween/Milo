module Mutations
	class AddSet < BaseMutation
		argument :workout_id, ID, required: true
		argument :exercise_id, ID, required: true
		argument :reps, Integer, required: true
		argument :weight, Integer, required: true

		type Types::UserActivityType

		def resolve(exercise_id: nil, workout_id: nil, reps: nil, weight: nil)
			UserActivity.create!(
				exercise_id: exercise_id,
				workout_id: workout_id,
				reps: reps,
				weight: weight
			)
		end
	end
end