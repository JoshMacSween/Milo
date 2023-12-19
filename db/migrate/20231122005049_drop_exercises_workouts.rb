class DropExercisesWorkouts < ActiveRecord::Migration[6.1]
  def change
    drop_table :exercises_workouts
  end
end
