import React from "react";
import "./WorkoutCard.css";

export default function WorkoutCard(workout) {
  console.log(workout)
  const { title, exercises } = workout.workout;
  const exerciseList = exercises.map((exercise) => {
    return (
      <li className="list-group-item bg-1" key={exercise.id}>
        Exercise: {exercise.name}
      </li>
    );
  });

  return (
    <div className="card bg-1">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <ul className="list-group">{exerciseList}</ul>
      </div>
    </div>
  );
}
