import React from 'react';
import workoutData from '../dummyWorkoutData';
import WorkoutCard from './WorkoutCard/WorkoutCard';
import { useQuery } from '@apollo/client';
// TODO: Fix imports; Use extensionless imports with index file; Unsure why this is not working
import { GET_WORKOUTS } from '../hooks/constants.ts'
import AddWorkout from './AddWorkout.tsx';

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

	const WorkoutCardList = data?.workouts.map((workout: Workout) => {
		return <WorkoutCard workout={workout} />;
	});

	return (
		<div>
			<div className="bg-light">
				<h1 className="display-4 ml-4 px-3">MILO.</h1>
			</div>
			<p className="lead">Workout tracker.</p>
			<div className="d-flex justify-content-between mx-4">
				{WorkoutCardList}
			</div>
			<div>
				<AddWorkout />
			</div>
		</div>
	);
}

export default WorkoutList;