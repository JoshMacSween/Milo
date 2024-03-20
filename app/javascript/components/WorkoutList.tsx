import React from 'react';
import workoutData from '../dummyWorkoutData';
import WorkoutCard from './WorkoutCard/WorkoutCard';
import { useQuery } from '@apollo/client';
// TODO: Fix imports; Use extensionless imports with index file; Unsure why this is not working
import { GET_WORKOUTS } from '../hooks/constants.ts'

export interface Workouts {
	workouts: Workout[];
}

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

	// console.log({ data })

	// const WorkoutCardList = workoutData.map((workout: Workout) => {
	// 	return <WorkoutCard workout={workout} />;
	// });

	function TestComponent() {
		const result = data?.workouts.map((workout) => {
			const sets = workout.workoutSets.map((set) => {
				return <div>
					<p>{set.exercise.name}</p>
					<p>{set.reps}x{set.weight}lbs</p>
				</div>;
			})
			return <div>
				<h1>{workout.title}</h1>
				<p>{workout.comments}</p>
				{sets}
			</div>;
		});
		return result
	};

	const WorkoutCardList = data?.workouts.map((workout: Workout) => {
		return <WorkoutCard workout={workout} />;
	});


	return (
		<div>
			<h1 className="display-4">MILO.</h1>
			<p className="lead">Workout tracker.</p>

			<div className="d-flex justify-content-between mx-4">
				{ WorkoutCardList }
			</div>
		</div>
	);
}

export default WorkoutList;