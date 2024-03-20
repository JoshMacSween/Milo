import React from 'react';
import useAddWorkout from '../hooks/useAddWorkout.ts';
import useAddSet from '../hooks/useAddSet.ts';

interface AddWorkoutProps {

}

export default function AddWorkout() {
  const handleAddWorkout = useAddWorkout();
  const handleAddSet = useAddSet();

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