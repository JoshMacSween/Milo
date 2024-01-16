import React from "react";
import "./WorkoutCard.css";

export default function WorkoutCard(workout) {
  const { title, exercises } = workout.workout;
  const exerciseList = exercises.map((exercise) => {
    const setsList = exercise.sets.map((set, index) => {
      return (
        <li className="list-group-item" key={index}>
          Set {index + 1}: {set.reps}x{set.weight} lbs
        </li>);
    });

    return (
      <li className="list-group-item bg-1" key={exercise.id}>
        {exercise.name}
        <ul>{setsList}</ul>
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
