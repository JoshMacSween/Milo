import { useMutation } from "@apollo/client";
import { CREATE_SET } from "./constants.ts";

export default function useAddSet() {
  const [addSet, { data: addSetData }] = useMutation(CREATE_SET);
  const handleAddSet = () => {
    addSet({
      variables: {
        workoutId: "6",
        exerciseId: "3",
        reps: 5,
        weight: 135
      }
    });
  };
  return handleAddSet;
}