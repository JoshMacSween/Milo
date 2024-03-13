import React from 'react';
import workoutData from '../dummyWorkoutData';
import WorkoutCard from './WorkoutCard/WorkoutCard';

function WorkoutList({ props }) {
	const WorkoutCardList = workoutData.map((workout) => {
		return <WorkoutCard workout={workout} />
	})

	return (
		<div>
			<h1 className="display-4">MILO.</h1>
			<p className="lead">Workout tracker.</p>

			<div className="d-flex justify-content-center">
				{WorkoutCardList}
			</div>
		</div>
	);
}

export default WorkoutList;