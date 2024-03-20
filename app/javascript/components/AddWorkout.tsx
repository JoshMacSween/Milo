import React from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_WORKOUT, CREATE_SET } from '../hooks/constants.ts';

interface AddWorkoutProps {

}

export default function AddWorkout() {
  const [addWorkout, { data: addWorkoutData }] = useMutation(CREATE_WORKOUT);
  const [addSet, { data: addSetData }] = useMutation(CREATE_SET);

  const handleAddWorkout = () => {
    addWorkout({ variables: { title: "Day 4 of starting strength" } });
  };

  const handleAddSet = () => {
    addSet({ variables: { workoutId: 4, exerciseId: 4, reps: 5, weight: 135 } })
  }

  return (
    <div className="d-flex flex-column">
      <footer className="bg-light py-3 px-4 sticky-footer">
        <div className="btn btn-primary" onClick={handleAddWorkout}>
          Log Workout
        </div>
        <div className="btn btn-primary" onClick={handleAddSet}>
          Add Set
        </div>
      </footer>
    </div>
  );
};