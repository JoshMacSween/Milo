import React from "react";
import "./WorkoutCard.css";

export default function WorkoutCard(workout) {
	const { title, comments, exercises } = workout.workout;
	const exerciseList = exercises.map((exercise) => {
		const setsList = exercise.sets.map((set, index) => {
			return (
				<li className="list-group-item card-text" key={index}>
					{set.reps}x{set.weight}lbs
				</li>);
		});

		return (
			<div className="bg-1">
				<li className="list-group-item" key={exercise.id}>
					<h6>{exercise.name}</h6>
					<ul className="mb-1">{setsList}</ul>
				</li>
			</div>
		);
	});

	return (
		<div className="card bg-1">
			<div className="card-body">
				<h5 className="card-title">{title}</h5>
				{comments && <h5 className="lead">{comments}</h5>}
				<div className="exerciseList">{exerciseList}</div>
			</div>
		</div>
	);
}