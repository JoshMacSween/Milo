import { gql } from '@apollo/client';

export const GET_WORKOUTS = gql`
	query allWorkoutsExercisesAndSets {
		workouts {
			id
			title
			comments
			workoutSets {
				id
				exercise {
					name
				}
				reps
				weight
			}
		}
	}
`;