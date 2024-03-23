import { useQuery } from "@apollo/client";
import { GET_EXERCISES } from "./constants.ts";
import { Exercise } from "../../../types.ts";

interface ExerciseData {
  exercises: Exercise[];
}

export default function useGetWorkouts(): Exercise[] {
  const { data, loading, error } = useQuery<ExerciseData>(GET_EXERCISES);

  return data?.exercises || [];
}