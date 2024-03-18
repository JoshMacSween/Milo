import React from 'react';
import workoutData from '../dummyWorkoutData';
import WorkoutCard from './WorkoutCard/WorkoutCard';
import { useQuery, gql } from '@apollo/client';

const GET_WORKOUTS = gql`
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

export interface Workout {
	title: string;
	comments: string;
	exercises: Exercise[];
}

export interface Exercise {
	name: string;
	id: number;
	sets: {
		weight: number;
		reps: number;
	}[];
}

function WorkoutList() {
	const { data, loading, error } = useQuery(GET_WORKOUTS);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error : {error.message}</p>;

	console.log({ data })

	const WorkoutCardList = workoutData.map((workout: Workout) => {
		return <WorkoutCard workout={workout} />;
	});

	return (
		<div>
			<h1 className="display-4">MILO.</h1>
			<p className="lead">Workout tracker.</p>

			<div className="d-flex justify-content-between mx-4">
				{WorkoutCardList}
			</div>
		</div>
	);
}

export default WorkoutList;