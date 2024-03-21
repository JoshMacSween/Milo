export interface Workouts {
	workouts: Workout[];
}

export interface Workout {
	title: string;
	comments: string;
	workoutSets: WorkoutSet[];
};

export interface WorkoutSet {
  exercise: Exercise;
	reps: number;
	weight: number;
}

export interface Exercise {
	id: number;
	name: string;
}