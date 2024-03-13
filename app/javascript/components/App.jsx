import React from 'react';
import WorkoutList from './WorkoutList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const props = {name: 'Brandi', age: 30, location: 'New York'};
    return (
        <div>
            <WorkoutList props={props}/>
        </div>
    );
}

export default App;