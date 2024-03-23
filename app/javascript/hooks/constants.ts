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
	mutation newWorkout($title: String!) {
		createWorkout(input: {title: $title}) {
			id
			title
			comments
		}
	}
`;

export const CREATE_SET = gql`
	mutation newSet($workoutId: ID!, $exerciseId: ID!, $reps: Int!, $weight: Int!) {
		addSet(input: {workoutId: $workoutId, exerciseId: $exerciseId, reps: $reps, weight: $weight}) {
			id
			exercise {
				name
			}
			reps
			weight
		}
	}
`;

export const DELETE_SET = gql`
	mutation deleteSet($setId: ID!) {
		deleteSet(input: {setId: $setId}) {
			id
		}
	}
`;

export const GET_EXERCISES = gql`
	query allExercises {
		exercises {
			id
			name
		}
	}
`;