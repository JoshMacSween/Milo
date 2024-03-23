import React from 'react';
import useAddWorkout from '../hooks/useAddWorkout.ts';
import useAddSet from '../hooks/useAddSet.ts';
import useDeleteSet from '../hooks/useDeleteSet.ts';
import AddWorkoutModal from './AddWorkoutModal.tsx';

interface AddWorkoutProps {

}

export default function AddWorkout() {
  const handleDeleteSet = useDeleteSet();
  const [showModal, setShowModal] = React.useState(false);

  const toggleModal = () => { setShowModal(!showModal) };
  console.log(showModal)

  return (
    <div className="d-flex flex-column">
      <footer className="bg-light py-3 px-4 sticky-footer">
        <div className="btn btn-primary" onClick={handleDeleteSet}>
          Delete Set
        </div>
        <div className="btn btn-primary" onClick={toggleModal}>
          Show Modal
        </div>
        {showModal && <AddWorkoutModal toggleModal={toggleModal}/>}
      </footer>
    </div>
  );
};