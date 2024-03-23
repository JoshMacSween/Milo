import React from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import useAddWorkout from '../hooks/useAddWorkout.ts';
import useGetWorkouts from '../hooks/useGetWorkouts.ts';
import useAddSet from '../hooks/useAddSet.ts';

interface AddWorkoutModalProps {
  toggleModal: () => void;
}

type Inputs = {
  workout: string;
  exerciseId: number;
  reps: number;
  weight: number;
}

// function AddSet() {
//   // useState to store selected WorkoutID and ExerciseID from form
//   // useState to store reps and weight from form

//   const handleAddSet = useAddSet({
//     workoutId: "1",
//     exerciseId: "1",
//     reps: 10,
//     weight: 100

//   });
//   return (
//     <div className="btn btn-primary" onClick={handleAddSet}>
//       Add Set
//     </div>
//   );

// }

export default function AddWorkoutModal({ toggleModal }: AddWorkoutModalProps) {
  const handleAddWorkout = useAddWorkout();
  const { register, handleSubmit, control } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log({ data });

  const exercises = useGetWorkouts();

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
              <div className="input-group">
                <span className="input-group-text">Workout</span>
                <input placeholder="Workout Title" className="form-control" {...register("workout")} />
              </div>

              <Controller
                name="exerciseId"
                control={control}
                defaultValue={1}
                render={({ field }) => (
                  <div className="input-group my-2">
                    <span className="input-group-text">Exercise</span>
                    <select className="form-control" {...field}>
                      {exercises.map((exercise) => (
                        <option value={exercise.id} key={exercise.id}>
                          {exercise.name}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
              />
              <div className="d-flex mb-3">
                <Controller
                  name="weight"
                  control={control}
                  defaultValue={0}
                  render={({ field }) => (
                    <div className="input-group">
                      <span className="input-group-text">Weight</span>
                      <input type="number" className="form-control" {...field} />
                    </div>
                  )}
                />
                <Controller
                  name="reps"
                  control={control}
                  defaultValue={0}
                  render={({ field }) => (
                    <div className="input-group">
                      <span className="input-group-text">Reps</span>
                      <input type="number" className="form-control" {...field} />
                    </div>
                  )}
                />
              </div>

              <input className="btn btn-primary" type="submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};