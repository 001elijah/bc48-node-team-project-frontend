import React from 'react';
import { useDispatch } from 'react-redux';
import { logoutUser } from 'redux/Auth/authOperations';

export const HomePage = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(logoutUser())}>Log logOut</button>
    </div>
  );
};

// HomePage to test modal window
// import React, { useState } from 'react';
// import { Modal } from '../components/Modal/Modal';

// export const HomePage = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <div>
//       <h1>Welcome to My Website</h1>
//       <button onClick={openModal}>Open Modal</button>

//       {isModalOpen && (
//         <Modal title="New board" theme="colorful" onClose={closeModal}>
//           <p>Content of the modal.</p>
//         </Modal>
//       )}
//     </div>
//   );
// };
