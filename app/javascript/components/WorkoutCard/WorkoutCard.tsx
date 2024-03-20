import React from "react";
import "./WorkoutCard.css";
import { Exercise, Workout } from "../WorkoutList";

interface WorkoutCardProps {
	workout: Workout;
}

export default function WorkoutCard(props) {

	const { workout } = props;
	
	const { title, comments, workoutSets } = workout;

	const setsList = workoutSets.map((set, index) => {
		return (
			<div>
				<li className="list-group-item card-text" key={index}>
					{set.exercise.name}: {set.reps}x{set.weight}lbs
				</li>
			</div>
		);
	});

	return (
		<div className="card bg-1">
			<div className="card-body">
				<h5 className="card-title">{title}</h5>
				{setsList}
				{comments && <h5 className="lead">{comments}</h5>}
			</div>
		</div>
	);
}