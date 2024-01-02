module Mutations
	class DeleteWorkoutSet < BaseMutation
        argument :set_id, ID, required: true

		type Types::WorkoutSetType

		def resolve(set_id: nil)
			workout_set = WorkoutSet.find_by(id: set_id)
			return nil unless workout_set
			
			workout_set.delete
		end
	end
end