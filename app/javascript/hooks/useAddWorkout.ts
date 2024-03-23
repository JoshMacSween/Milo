import { useMutation } from "@apollo/client";
import { CREATE_WORKOUT } from "./constants.ts";

export default function useAddWorkout() {
  const [addWorkout, { data: addWorkoutData }] = useMutation(CREATE_WORKOUT);
  
  const handleAddWorkout = (workoutTitle: string) => {
    addWorkout({ variables: { title: workoutTitle }});
  };

  return handleAddWorkout;
};