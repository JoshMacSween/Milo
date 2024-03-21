import React from "react";
import "./WorkoutCard.css";
import { Workout } from "../../../../types.ts";

interface WorkoutCardProps {
	workout: Workout;
}

export default function WorkoutCard({ workout }: WorkoutCardProps) {
	const { title, comments, workoutSets } = workout;

	const setsList = workoutSets.map((set, index) => {
		return (
			<li className="list-group-item card-text" key={index}>
				{set.exercise.name}: {set.reps}x{set.weight}lbs
			</li>
		);
	});

	return (
		<div className="card bg-1">
			<div className="card-body">
				<h5 className="card-title">{title}</h5>
				<ul className="list-group list-group-flush">{setsList}</ul>
				{comments && <h5 className="lead">{comments}</h5>}
			</div>
		</div>
	);
}