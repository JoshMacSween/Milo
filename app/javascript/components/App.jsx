import React from 'react'
import WorkoutCard from './WorkoutCard/WorkoutCard'
import workoutData from '../dummyWorkoutData'

export default function App() {
  const WorkoutList = workoutData.map((workout) => {
          return <WorkoutCard workout={workout} />
        })
  
  return (
    <div>
      <h1 className="display-4">MILO.</h1>
      <p className="lead">Workout tracker.</p>

      <div className="d-flex justify-content-center">
        {WorkoutList}
      </div>
    </div>
  )
};