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

export const CREATE_WORKOUT = gql`
	mutation newWorkout {
		createWorkout(input: {title:"Day 3 of starting strength"}) {
			id
			title
			comments
		}
	}
`;

export const CREATE_SET = gql`
	mutation newSet {
		addSet(input: {workoutId:4, exerciseId: 4, reps:5, weight:135 }) {
			id
			exercise {
				name
			}
			reps
			weight
		}
	}
`;