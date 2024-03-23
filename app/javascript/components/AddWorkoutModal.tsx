import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import useAddWorkout from '../hooks/useAddWorkout.ts';
import useGetWorkouts from '../hooks/useGetWorkouts.ts';

interface AddWorkoutModalProps {
  toggleModal: () => void;
}

type Inputs = {
  workout: string;
}

function SelectExercise() {
  const exercises = useGetWorkouts();
  const options = exercises.map((exercise) => {
    <option value={exercise.id} key={exercise.id}>{exercise.name}</option>
  })

  return (
    <select>
      {options}
    </select>
  );
}

export default function AddWorkoutModal({ toggleModal }: AddWorkoutModalProps) {
  const handleAddWorkout = useAddWorkout();
  const {
    register,
    handleSubmit,
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => handleAddWorkout(data.workout);

  return (
    <div className="modal show d-block" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title palette-slate">Modal Title</h5>
            <button type="button" className="btn-close" onClick={toggleModal}></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input placeholder="Workout Title" {...register("workout")} />

              <input type="submit" />

              <SelectExercise />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};