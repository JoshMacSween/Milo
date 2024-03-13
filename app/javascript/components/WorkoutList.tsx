import React from 'react';
import workoutData from '../dummyWorkoutData';
import WorkoutCard from './WorkoutCard/WorkoutCard';

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